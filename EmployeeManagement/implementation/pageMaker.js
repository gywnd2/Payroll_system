var template = require('./template.js');

module.exports = {
  // input info to add new data
  render_inputPage:function(msg) {
    var err_msg = ''
    if (msg != '' ) { console.log(msg); err_msg = `<h3 style="color:red;">${msg}</h3>`; }
    var th = `<tr>
                <th class="tg-wpsg" name = "id">ID<br></th-->
                <th class="tg-wpsg" name = "name">이름</th>
                <th class="tg-wpsg" name = "phoneNUM">전화번호</th>
                <th class="tg-wpsg" name = "password">비밀번호</th>
                <!--th class="tg-wpsg" name = "pay">급여</th-->
                <th class="tg-wpsg" name = "option">급여옵션</th>
              </tr>`;
    var td = `<tr>
                <td class="tg-76xw"><br><input type="text" name="id" size=7></td>
                <td class="tg-76xw"><br><input type="text" name="name" size=7></td>
                <td class="tg-76xw"><br><input type="text" name="phoneNUM" size=7></td>
                <td class="tg-76xw"><br><input type="password" name="password" size=7></td>
                <td class="tg-76xw"><input type="radio" name="pay_op_type" value=0><label for=0> 월급  </label>
                                    <input type="radio" name="pay_op_type" value=1><label for=1> 시급 </label>
                                    <br><br>amount: <input type="text" name='pay_op_amount' size=7></td>
              </tr>`;
    return template.HTML('직원 추가', err_msg, th, td,
                          `<br><br>
                          <form method = "post">
                          <div class='s1' align="right">
                              <input type = "button" value = "취소" onclick="location.href ='/employeeManagement'"
                                style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
                              <input type = "submit" value = "확인" onclick="javascript: form.action = '/employeeManagement_add';"
                                style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
                          </div></form>`);
    //return template.inputPage();
  },

  // display entire of searched data list
  render_dataList:function(data) {
    var th = `<tr>
                <th class="tg-wpsg">ID<br></th>
                <th class="tg-wpsg">이름</th>
                <th class="tg-wpsg">전화번호</th>
                <th class="tg-wpsg">급여</th>
                <th class="tg-wpsg">급여옵션</th>
                <th class="tg-wpsg"></th>
              </tr>`;
    if(data) {
      var i = 0;
      var td = '<form method = "post"';
      while(i < data.length) {
        td += `<tr><td class="tg-76xw">${data[i].id}</td>
                  <td class="tg-76xw">${data[i].name}</td>
                  <td class="tg-76xw">${data[i].phoneNUM}</td>
                  <td class="tg-76xw">${data[i].working_hours}</td>
                  <td class="tg-76xw">${data[i].pay}</td>
                  <td class="tg-76xw"><input type='button' value='more' onclick="location.href='/employeeManagement_search?id=${data[i].id}'"</td></tr>`;
        i += 1;
      }
      td += '</form>';
    }
    return template.HTML('직원 관리 시스템',
                            `<div class='s1'>
                            	<form method="post">
                                <input type="text" name = "key" placeholder="id or name" inform="inform" style="width:450px;height:60px;font-size:30px;"/>
                                <input type = "submit" value = "SEARCH" onclick = "javascript: form.action = '/employeeManagement_search';"
                                  style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
                                <input type = "button" value = "ADD" onclick="location.href ='/employeeManagement_input'"
                              	  style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
                            	</form></div><br>`,
                            th, td, '');
  },

  render_more:function (data) {
    var pay_op_type = (data[0].pay_op_type == 0) ? '월급' : '시급';
    var th = `<tr>
                <th class="tg-wpsg">ID<br></th>
                <th class="tg-wpsg">이름</th>
                <th class="tg-wpsg">전화번호</th>
                <th class="tg-wpsg">비밀번호</th>
                <th class="tg-wpsg">근무시간</th>
                <th class="tg-wpsg">급여</th>
                <th class="tg-wpsg">급여옵션</th>
              </tr>
            `;
    var td = `<tr>
                <td class="tg-76xw">${data[0].id}</td>
                <td class="tg-76xw">${data[0].name}</td>
                <td class="tg-76xw">${data[0].phoneNUM}</td>
                <td class="tg-76xw">${data[0].password}</td>
                <td class="tg-76xw">${data[0].working_hours}</td>
                <td class="tg-76xw">${data[0].pay}</td>
                <td class="tg-76xw">${pay_op_type}
                                    <br><br>amount: ${data[0].pay_op_amount}원</td>
              </tr>`;
    return template.HTML('사원 상세', '', th, td,
                          `<br><br>
                          <div class='s1' align="right">
                              <input type = "button" value = "삭제"
                                style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
                              <input type = "button" value = "확인" onclick="location.href ='/employeeManagement';"
                                style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
                          </div>`);
  },

  // when error happens
  warning:function(err_msg) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>ERROR</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>ERROR - ${err_msg}<h1>
      <h3><a href="/">OK</a></h3>
    </body>
    </html>
    `
  },
  alert:function(err_msg) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>ERROR</title>
      <meta charset="utf-8">
    </head>
    <body>
      <script type="text/javascript">
        alert(${err_msg});
      </script>
    </body>
    </html>

    `
  }
}
