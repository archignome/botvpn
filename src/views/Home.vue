<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Mr.Gnome VPN Service</h1>
      <p class="text-xl text-gray-600 mb-12">اتصال سریع، امن و قابل اعتماد</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">🚀 سرعت بالا</h3>
        <p class="text-gray-600">اتصال فوق العاده سریع با سرورهای بهینه سازی شده ما.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">🔒 امنیت</h3>
        <p class="text-gray-600">محافظت از داده های شما با رمزگذاری پیشرفته.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">📱 چند دستگاه</h3>
        <p class="text-gray-600">اتصال همزمان چندین دستگاه با یک اکانت.</p>
      </div>
    </div>

    <div class="text-center space-y-4">
      <router-link to="/plans" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        مشاهده پلن ها
      </router-link>
      <div>
        <a href="https://t.me/your_bot_username" target="_blank" class="text-blue-600 hover:text-blue-800">
          📱 ربات تلگرام ما
        </a>
      </div>
    </div>

    <div class="mt-12 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-center">راهنمای اتصال</h2>
      <ol class="list-decimal list-inside space-y-2 text-gray-700">
        <li>دانلود و نصب کلاینت مناسب برای دستگاه خود</li>
        <li>خرید اشتراک از طریق ربات تلگرام</li>
        <li>دریافت اطلاعات اتصال پس از تایید پرداخت</li>
        <li>وارد کردن اطلاعات در کلاینت و اتصال</li>
      </ol>
    </div>

    <div class="mt-8 text-center">
      <h3 class="text-xl font-semibold mb-4">پشتیبانی</h3>
      <p class="text-gray-600">
        برای دریافت پشتیبانی با ما در تلگرام تماس بگیرید:
        <a href="https://t.me/firstgnome" target="_blank" class="text-blue-600 hover:text-blue-800">@firstgnome</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
/* Add support for Persian text alignment */
html[lang="fa"] {
  direction: rtl;
}
</style> 