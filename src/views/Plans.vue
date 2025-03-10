<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-center text-gray-900 mb-12">پلن های VPN ما</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="plan in plans" :key="plan.id" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ plan.name }}</h2>
          <div class="text-3xl font-bold text-blue-600 mb-4">{{ plan.price }}T</div>
          <div class="space-y-2 mb-6">
            <p class="text-gray-600">{{ plan.details }}</p>
          </div>
          <a 
            :href="'https://t.me/your_bot_username?start=' + plan.id" 
            target="_blank"
            class="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            خرید از طریق تلگرام
          </a>
        </div>
      </div>
    </div>

    <div class="mt-12 bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold text-center mb-6">نحوه خرید</h2>
      <div class="space-y-4">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-blue-600 font-bold">1</span>
          </div>
          <p class="mr-4 text-gray-700">پلن مورد نظر خود را انتخاب کنید</p>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-blue-600 font-bold">2</span>
          </div>
          <p class="mr-4 text-gray-700">به ربات تلگرام ما متصل شوید</p>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-blue-600 font-bold">3</span>
          </div>
          <p class="mr-4 text-gray-700">پرداخت را انجام دهید</p>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-blue-600 font-bold">4</span>
          </div>
          <p class="mr-4 text-gray-700">اطلاعات اتصال را دریافت کنید</p>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <p class="text-gray-600 mb-4">نیاز به راهنمایی دارید؟</p>
      <a 
        href="https://t.me/firstgnome" 
        target="_blank"
        class="text-blue-600 hover:text-blue-800"
      >
        با پشتیبانی تلگرام تماس بگیرید
      </a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'Plans',
  setup() {
    const plans = ref([]);

    const fetchPlans = async () => {
      try {
        const response = await axios.get('/api/configs');
        plans.value = response.data;
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    onMounted(() => {
      fetchPlans();
    });

    return {
      plans
    };
  }
}
</script>

<style>
/* Add support for Persian text alignment */
html[lang="fa"] {
  direction: rtl;
}
</style> 