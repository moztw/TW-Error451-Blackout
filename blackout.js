//套上CSS樣式
var blackout_css = document.createElement("style");
var blackout_css_content = document.createTextNode(
    "#blackout { background-color: #A05729; background-image: url(blackout-background.jpg); background-repeat: no-repeat; background-size: cover; font-size: 20px; height: 90%; left: 0; margin: 0; overflow: hidden; padding: 5%; position: absolute; top: 0; width: 90%;}" + 
    "#blackout h1 { color: white; font-family: sans-serif; font-size: 1.5em; font-weight: bold; }" + 
    "#blackout section { color: white; margin: 0 auto; line-height: 1.8em; max-width: 800px; text-shadow: 1px 3px 3px black; width: 75%; }" + 
    "#blackout a { color: #CCC; } #blackout a:hover { color: #EEE;}" +
    "#blackout footer { margin-top: 3rem; text-align: center;} " +
    "#blackout .blackout-btn { background-color: black; border-radius: 8px 8px 8px 8px; box-shadow: 0 0 15px white; color: white; padding: 0.5em 1em 0.35em; text-decoration: none; }" + 
    "#blackout .blackout-btn:hover { background-color: #333; color: white; }"
);
blackout_css.appendChild(blackout_css_content);

//騰寫抗議內容
    var header = document.createElement("header");
    var title = document.createElement("h1");
    title.appendChild(document.createTextNode("ERROR 451: 本網頁基於國家法律而封鎖"));
    header.appendChild(title);

    var section = document.createElement("section");
    section.appendChild(header);

    var content1 = document.createElement("p");
    content1.appendChild(document.createTextNode("為何看到這個畫面？"));

    var content2 = document.createElement("p");    
    content2.appendChild(document.createTextNode("針對中華民國經濟部智慧財產局（以下簡稱智財局）日前發布新聞稿，稱將研議相關法案，針對境外重大侵權網站，擬建立快速處置措施，令網路服務提供者（ISP）予以封鎖乙事，本網站表示強烈反對。並呼籲政府相關單位停止討論任何類似美國SOPA的法案，以維護資訊流通與祕密通訊自由。如果我們不積極爭取，有一天，可能將會真的看到類似如此的"));
    var content2_content_a1 = document.createElement("a");
    content2_content_a1.setAttribute("href", "http://binb.tw/?p=407");
    content2_content_a1.setAttribute("target", "_blank");    
    content2_content_a1.appendChild(document.createTextNode("ERROR 451 錯誤"));
    content2.appendChild(content2_content_a1);
    content2.appendChild(document.createTextNode("。"));

    var content3 = document.createElement("p");
    content3.appendChild(document.createTextNode("更多訊息請閱讀："));

    var content3_content_a = document.createElement("a");
    content3_content_a.setAttribute("href", "https://www.facebook.com/events/486224794784563/");
    content3_content_a.setAttribute("target", "_blank");
    content3_content_a.appendChild(document.createTextNode("#freeandopen 斷然反對鎖國！堅決主張百分之百的網路自由！！"));
    content3.appendChild(content3_content_a);
    
    section.appendChild(content1);
    section.appendChild(content2);
    section.appendChild(content3);

    var footer = document.createElement("footer");
    var footer_content_close = document.createElement("a");
    footer_content_close.setAttribute("href", "javascript:void(0)");
    footer_content_close.setAttribute("class", "blackout-btn");
    footer_content_close.setAttribute("onclick", "document.getElementById('blackout').style.display = 'none'");
    footer_content_close.appendChild(document.createTextNode("繼續瀏覽網頁"));
    footer.appendChild(footer_content_close);

//建立抗議內容到#blackout區塊
window.onload = function()
{
    var element = document.createElement("div");
    element.id = 'blackout';
    element.appendChild(blackout_css);
    element.appendChild(section);
    element.appendChild(footer);
    document.body.appendChild(element);
}
