import React from "react";
import Rupchanda from "../images/rupchanda.jpeg";
import Speed from "../images/speed.png";
import Danish from "../images/danish.jpg";
import Diploma from "../images/diploma.jpg";
import Aci from "../images/aci.jpg";

const Information = () => {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
        Information
      </h1>
      <section class="antialiased bg-gray-100 text-gray-600 px-4">
        <div class="flex flex-col justify-center h-full">
          {/* <!-- Table --> */}
          <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
              <h2 class="font-semibold text-gray-800">Important Information</h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Product Name</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Quantity</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Pcs</div>
                      </th>
                      {/* <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Country</div>
                                </th> */}
                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                    <tr>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              class="rounded-full"
                              src={Rupchanda}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div class="font-medium text-gray-800">
                            Oil (1 Litre)
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">1 Cartoon</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">
                          16 Pcs
                        </div>
                      </td>
                      {/* <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">🇺🇸</div>
                                </td> */}
                    </tr>
                    <tr>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              class="rounded-full"
                              src={Rupchanda}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div class="font-medium text-gray-800">
                            Oil (2 Ltr)
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">1 Cartoon</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">
                          9 Pcs
                        </div>
                      </td>
                      {/* <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">🇩🇪</div>
                                </td> */}
                    </tr>
                    <tr>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              class="rounded-full"
                              src={Rupchanda}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div class="font-medium text-gray-800">
                            Oil (5 Litre)
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">1 Cartoon</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">
                          4 Pcs
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              class="rounded-full"
                              src={Speed}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div class="font-medium text-gray-800">
                            Speed (250ml)
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">1 Cartoon</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">
                          24 Pcs
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              class="rounded-full"
                              src={Danish}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div class="font-medium text-gray-800">
                            Condensed Milk (397gm)
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">1 Cartoon</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">
                          48 Pcs
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              class="rounded-full"
                              src={Diploma}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div class="font-medium text-gray-800">
                            Diploma (500gm)
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">1 Cartoon</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">
                          24 Pcs
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              class="rounded-full"
                              src={Diploma}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div class="font-medium text-gray-800">
                            Diploma (1kg)
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">1 Cartoon</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">
                          12 Pcs
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              class="rounded-full"
                              src={Aci}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div class="font-medium text-gray-800">
                            ACI Salt (500gm)
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">1 Cartoon</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">
                          25 Pcs
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              class="rounded-full"
                              src={Aci}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div class="font-medium text-gray-800">
                            ACI Salt (1kg)
                          </div>
                        </div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left">1 Cartoon</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">
                          50 Pcs
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
