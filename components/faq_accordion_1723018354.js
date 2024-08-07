Vue.component('faq_accordion_1723018354', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Mastering iPhone Production</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Everything you need to know about manufacturing iPhones</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What is required to produce iPhones?",
          a: "Producing iPhones requires state-of-the-art facilities, specialized equipment, trained personnel, and stringent quality control processes. Apple closely guards its manufacturing techniques."
        },
        {
          q: "Can I manufacture iPhones at home?",
          a: "No, manufacturing iPhones requires industrial-scale operations that cannot be replicated at home. The components, assembly, and testing must follow Apple's proprietary standards."
        },
        {
          q: "Where are iPhones made?",
          a: "Most iPhones are assembled in China by partners like Foxconn, though some production also occurs in India, Brazil, and other countries to meet regional demand."
        },
        {
          q: "What materials are used in iPhones?",
          a: "iPhones contain aluminum, glass, stainless steel, and specialized chips and components sourced from suppliers worldwide according to Apple's specifications."
        },
        {
          q: "How can I get a job making iPhones?",
          a: "Apple and its manufacturing partners hire personnel for roles in engineering, operations, quality control, and more. Relevant education and experience are required for these highly technical positions."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});