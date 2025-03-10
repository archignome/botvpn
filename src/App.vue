<template>
  <div class="min-h-screen bg-gray-100" dir="rtl">
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <router-link to="/" class="flex items-center">
              <span class="text-xl font-bold text-gray-800">Mr.Gnome VPN</span>
            </router-link>
          </div>
          <div class="flex items-center space-x-4 space-x-reverse">
            <router-link to="/" class="px-3 py-2 text-gray-700 hover:text-gray-900">خانه</router-link>
            <router-link to="/plans" class="px-3 py-2 text-gray-700 hover:text-gray-900">پلن ها</router-link>
            <a 
              href="https://t.me/your_bot_username" 
              target="_blank" 
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ربات تلگرام
            </a>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-white shadow-lg mt-8">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-2">تماس با ما</h3>
            <p class="text-gray-600">
              <a href="https://t.me/firstgnome" target="_blank" class="hover:text-blue-600">@firstgnome</a>
            </p>
            <p class="text-gray-600">bodapoor5@gmail.com</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">دانلود کلاینت ها</h3>
            <ul class="space-y-1">
              <li><a href="#" class="text-gray-600 hover:text-blue-600">🤖 اندروید</a></li>
              <li><a href="#" class="text-gray-600 hover:text-blue-600">💻 ویندوز</a></li>
              <li><a href="#" class="text-gray-600 hover:text-blue-600">🍏 مک</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">لینک های مفید</h3>
            <ul class="space-y-1">
              <li><router-link to="/plans" class="text-gray-600 hover:text-blue-600">پلن های VPN</router-link></li>
              <li><a href="#" class="text-gray-600 hover:text-blue-600">راهنمای اتصال</a></li>
              <li><a href="#" class="text-gray-600 hover:text-blue-600">سوالات متداول</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 text-center text-gray-600">
          © 2024 Mr.Gnome VPN. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap');

body {
  font-family: 'Vazirmatn', system-ui, -apple-system, sans-serif;
}

/* RTL support */
.space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}
</style> 