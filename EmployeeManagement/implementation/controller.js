var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');

var login_checker = require('./login_checker.js');
var connectDB = require('./DBconnection.js');
var makePage = require('./pageMaker.js');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  console.log('p:' + pathname);
  console.log(queryData);
  console.log('u:' + _url);

  var authority = login_checker.isAuthorized();
  if (authority != true) {
    response.writeHead(404);
    response.end('no Authority');
  }
  else {
    /* // start page
    // In this page you can choose one (employee management or commuting management)
    if(pathname == '/'){ //main
      if(queryData.id == undefined){
          var html = makePage.home();
          response.writeHead(200);
          response.end(html);
      }
    }*/

    // Employee Management main page
    if(pathname == '/employeeManagement') {
      connectDB.request_entire((data)=> {
        var html = makePage.render_dataList(data);
        response.writeHead(200);
        response.end(html);
      });
    }

    // search process
    else if(pathname == '/employeeManagement_search') {
      if(queryData.id == undefined){
        var body = '';
        request.on('data', function(data) {
          body += data;
        });
        request.on('end', function() {
          var post = qs.parse(body);
          var search_key = post.key;
          if (search_key) {
            connectDB.request_search(search_key, (data) => {
              var html = makePage.render_dataList(data);
              response.writeHead(200);
              response.end(html);
            });
          }

          // if no key input, do nothing
          else {
            response.writeHead(302, {Location: '/employeeManagement'});
            response.end();
          }
        });
      }
      else {
        console.log('ok');
        //var filteredId = path.parse(queryData.id).base;
        connectDB.request_search(queryData.id, (data)=> {
          var html = makePage.render_more(data);
          response.writeHead(200);
          response.end(html);
        });
      }
    }

    // input info to add new data
    else if (pathname == '/employeeManagement_input') {

      if (queryData.id == undefined) {
        var html = makePage.render_inputPage('');
        response.writeHead(200);
        response.end(html);
      }

    }

    // add process
    else if (pathname = '/employeeManagement_add') {
      var body = '';
      request.on('data', function(data) {
        body += data;
      });
      request.on('end', function() {
        var post = qs.parse(body);
        var id = post.id;
        var name = post.name;
        var password = post.password;
        var phoneNUM = post.phoneNUM;
        var pay_op_type = post.pay_op_type;
        var pay_op_amount = post.pay_op_amount;

        // make sure that all data has been received
        if (id && name && password && phoneNUM && pay_op_type && pay_op_amount) {
          connectDB.request_search(id, (data) => {
            // make sure there is already the same id
            if (data.length == 0) {
              connectDB.request_add(id, name, password, phoneNUM, pay_op_type, pay_op_amount, () => {
                response.writeHead(302, {Location: '/employeeManagement'});
                response.end();
              });
            }
            else { // there is already same id
              response.writeHead(200)
              response.end('wrong input.');
            }
          });
        }
        else { // not input all data
          response.writeHead(200)
          response.end('wrong input.');
        }
      });
    }


    else {
      response.writeHead(404);
      response.end('Not found')
    }
  }
});

app.listen(2021);
