//点击之后请求下一页
let n = 1;
getPage.onclick = () => {
  n += 1;
  const request = new XMLHttpRequest();
  request.open("get", `/page${n}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        xxx.innerHTML = "";
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
      }
    }
  };
  request.send();
};

//点击之后请求JSON
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response);
        console.log(object); //可以利用这个对象的属性做一些操作
        myName.textContent = object.name;
      }
    }
  };
  request.send();
};

//点击之后请求XML
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    }
  };
  request.send();
};

//点击之后请求HTML
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onreadystatechange = () => {
    const div = document.createElement("div");
    console.log(request.response);
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.send();
};

//点击之后请求JS
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/2.js");
  request.onreadystatechange = () => {
    //将js文件中的内容插入到html中
    //创建script标签
    const script = document.createElement("script");
    //填写script内
    script.innerHTML = request.response;
    //将script标签插在head下面
    document.body.appendChild(script);
  };
  request.send(); // ready
};

//点击之后请求CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css");
  request.onreadystatechange = () => {
    //改变的时候触发
    console.log(request.readyState);
    if (request.readyState === 4) {
      //下载完成，但不知道是成功还是失败，成功为2xx，失败为4xx或者5xx
      if (request.status >= 200 && request.status < 300) {
        //将css文件中的内容插入到html中
        //创建style标签
        const style = document.createElement("style");
        //填写style内
        style.innerHTML = request.response;
        //将style标签插在head下面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send(); // readyState = 2
};
