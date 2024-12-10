// الحصول على الكود العشوائي من الرابط
const urlParams = new URLSearchParams(window.location.search);
const randomCode = urlParams.get('code'); // الحصول على الكود العشوائي من الرابط

const fileMessage = document.getElementById('fileMessage');
const downloadBtn = document.getElementById('downloadBtn');

// محاكاة رابط الملف الذي تم رفعه
const fileUrl = `https://xenon.github.io/files/${randomCode}`;

fileMessage.textContent = `رابط تحميل الملف: ${fileUrl}`;

// عند النقر على زر "تحميل الملف"، سيتم توجيه المستخدم لتحميل الملف (محاكاة)
downloadBtn.addEventListener('click', () => {
    window.location.href = fileUrl;
});
￼Enter
