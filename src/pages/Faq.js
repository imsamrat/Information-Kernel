import React from "react";
import Footer from "../components/Footer";

const Faq = () => {
  return (
    <div class="accordion" id="accordionExample">
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
        আপনার সকল জিজ্ঞাসা
      </h1>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingOne">
          <button
            class="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <b> দক্ষিণখানে কি স্পিড অর্ডার নেওয়া যাবে? </b>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-4 px-5">
            দুঃখিত, এইমুহূর্তে নেওয়া যাচ্ছে না।
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingTwo">
          <button
            class="
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <b>তেজগাঁ এরিয়াতে কি ডিপ্লোমা অর্ডার নেওয়া যাবে?</b>
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-4 px-5">না।</div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingThree">
          <button
            class="
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <b>কোন কোন এরিয়াতে রূপচান্দা তেল অর্ডার নেওয়া যাবে না?</b>
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-4 px-5">
            <strong>বনশ্রী ও নারায়ণগঞ্জ</strong> জোনের শনির আখড়া ও রায়েরবাগ
            এরিয়াতে রুপচান্দা তৈল অর্ডার নেওয়া যাবে না।
            <strong>গুলশানের</strong> সকল এরিয়াতে রুপচান্দা তৈল অর্ডার নেওয়া
            যাবে না।
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingFour">
          <button
            class="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            <b>কোন এরিয়তে ACI Salt (লবন) অর্ডার নেওয়া যাবে না?</b>
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-4 px-5">
            মিরপুর জোনের আন্ডারে <strong> মিরপুর ১ হাবের </strong> সকল এরিয়াতে
            ACI Salt (লবন) অর্ডার নেওয়া যাবে না।
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingFive">
          <button
            class="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseFive"
          >
            <b>বাড্ডাতে কি ব্র্যান্ডেড প্রোডাক্ট অর্ডার নেওয়া যাবে?</b>
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-4 px-5">
            পরবর্তী ঘোষনা না আসা পর্যন্ত অর্ডার নেওয়া যাবে না। ধন্যবাদ।
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingSix">
          <button
            class="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="true"
            aria-controls="collapseSix"
          >
            <b>বাল্ক অর্ডার নেওয়ার নিয়ম কি?</b>
          </button>
        </h2>
        <div
          id="collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-4 px-5">
            এখন থেকে আমরা যদি বাল্ক অর্ডার নেই কোনো রিটেইলার এর কাছ থেকে তাহলে
            অবশ্যই <strong>মোশাররফ</strong> ভাই এর সাথে কথা বলে নিবো। এবং বাল্ক
            অর্ডার এর ক্ষেত্রে ২৫ কেজি এর বস্তার ক্ষেত্রে রিটেইলার কোনো লেবার
            Cost পাবে না রিটেইলার কে নিজের দায়িত্বে প্রডাক্ট নামিয়ে নিতে হবে, ৫০
            কেজি বস্তা এর ক্ষেত্রে ৩০ বস্তা পর্যন্ত রিটেইলার লেবার Cost পাবে।
            উদাহরনসরূপ- ৩০ বস্তার উপরে হলে রিটেইলার লেবার Cost পাবে না। যদি ৫০
            কেজির বস্তা ৩০ বস্তার বেশি ৩১ বস্তাও হয় তাহলে পুরো ৩১ বস্তার ই লেবার
            কস্ট রিটেইলার কে বহন করতে হবে।
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingSeven">
          <button
            class="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="true"
            aria-controls="collapseSeven"
          >
            <b>Area List (এরিয়া লিস্ট) ডাউনলোড লিঙ্ক?</b>
          </button>
        </h2>
        <div
          id="collapseSeven"
          class="accordion-collapse collapse"
          aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body py-4 px-5">
            <a
              href="https://docs.google.com/uc?id=1ZMWbRxfJLWEGAW4lnK6R2GvBm_idVaJb&export=download&hl=en_US"
              target="_blank"
            >
              <u>Click Here</u>
            </a>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Faq;
