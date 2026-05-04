// رسالة عند فتح الموقع
alert("🚨 الموقع لسه تحت التطوير، استنى التحديثات 🔥");

// إضافة فيديو
function addVideo() {
    let link = prompt("حط لينك الفيديو:");

    if(link){
        let container = document.getElementById("videos");

        let a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        a.innerText = "🎬 فيديو جديد";

        container.appendChild(a);
    }
}
