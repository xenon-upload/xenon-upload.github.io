// دالة لتوليد كود عشوائي بطول معين
function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// التعريف بالعنصر في الصفحة
const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const statusMessage = document.getElementById('statusMessage');
const fileLink = document.getElementById('fileLink');

// دالة لتحميل الملف (محاكاة رفع الملف إلى GitHub)
uploadBtn.addEventListener('click', () => {
    const file = fileInput.files[0];
    
    if (file) {
        const randomCode = generateRandomCode(24); // توليد الكود العشوائي
        const fileUrl = `https://xenon.github.io/files/${randomCode}`;

        // عرض رابط الملف
        fileLink.textContent = `تم رفع الملف بنجاح! رابط الملف: ${fileUrl}`;
        
        // عرض رسالة نجاح
        statusMessage.textContent = `تم رفع الملف: ${file.name}`;
        statusMessage.style.color = 'green';
    } else {
        statusMessage.textContent = 'يرجى اختيار ملف أولاً';
        statusMessage.style.color = 'red';
    }
});
