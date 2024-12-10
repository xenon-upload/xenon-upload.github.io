// دالة لتوليد كود عشوائي بطول معين
function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// تعريف العناصر في الصفحة
const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const statusMessage = document.getElementById('statusMessage');

// دالة لتحميل الملف (محاكاة رفع الملف)
uploadBtn.addEventListener('click', () => {
    const file = fileInput.files[0];
    
    if (file) {
        const randomCode = generateRandomCode(24); // توليد الكود العشوائي
        const fileUrl = `https://xenon.github.io/files/${randomCode}`;

        // إنشاء رابط للانتقال إلى صفحة الملف المرفوع
        const filePageUrl = `file.html?code=${randomCode}`;

        // عرض رسالة توجيه للمستخدم
        statusMessage.textContent = `تم رفع الملف بنجاح! يمكنك عرض الملف من خلال الرابط التالي: ${filePageUrl}`;
        statusMessage.style.color = 'green';

        // توجيه المستخدم إلى صفحة الملف بعد 3 ثواني
        setTimeout(() => {
            window.location.href = filePageUrl;
        }, 3000);
    } else {
        statusMessage.textContent = 'يرجى اختيار ملف أولاً';
        statusMessage.style.color = 'red';
    }
});
