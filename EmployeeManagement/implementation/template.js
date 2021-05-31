
module.exports = {
  HTML:function(title, button_top, th, td, button_bottom) {
    return `
    <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
    <center>
    <h1>${title}</h1>
    <div class='s1' align="left">
      <input type = "button" value = "HOME" onclick="location.href = '/employeeManagement'"
      style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
    </div>
    <br>
      ${button_top}

    <style type="text/css">
      .tg  {border-collapse:collapse;border-color:#aabcfe;border-spacing:0;}
      .tg td{background-color:#e8edff;border-color:#aabcfe;border-style:solid;border-width:1px;color:#669;
        font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:50px 50px;word-break:normal;}
      .tg th{background-color:#b9c9fe;border-color:#aabcfe;border-style:solid;border-width:1px;color:#039;
        font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
      .tg .tg-wpsg{background-color:#6665cd;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}
      .tg .tg-76xw{background-color:#cbcefb;border-color:#000000;color:#000000;text-align:center;vertical-align:top}
      </style>
      <table class="tg">
      <thead>
        ${th}
      </thead>
      <tbody>
        ${td}
      </tbody>
      </table>
    </center>
    ${button_bottom}
    </body>
    </html>
    `;
  }
}
