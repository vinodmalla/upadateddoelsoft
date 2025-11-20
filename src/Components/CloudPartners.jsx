import React from "react";
import { motion } from "framer-motion";

export default function CloudPartners() {
  return (
    <section className="w-full bg-[#F4F6FB] flex justify-center py-12 sm:py-16 md:py-20">
      <div className="w-[90%] max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-[44px] font-kumbh font-bold text-gray-900">
            Our <span className="text-[#EF0E0E]">Partners</span>
          </h1>
          <p className="text-gray-500 font-inter mt-2 text-base sm:text-lg">
            Trusted global cloud platforms powering business innovation
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:ml-2 gap-12">

          {/* Azure Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col items-center text-center p-6 bg-white shadow-md  border border-gray-200 hover:shadow-xl transition cursor-pointer"
          >
            <motion.img
              src="/azure-logo.png"
              alt="Microsoft Azure"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-48 h-auto mb-6"
            />

            <h2 className="text-2xl font-semibold mb-4 text-[#0078D4]">
              Microsoft Azure
            </h2>

            <p className="text-gray-600 font-inter leading-relaxed">
              Azure is a cloud computing service created by Microsoft for
              building, testing, deploying, and managing applications through a
              global network of data centers. It provides SaaS, PaaS, and IaaS
              solutions to support modern businesses.
            </p>
          </motion.div>

          {/* AWS Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col items-center text-center p-6 bg-white shadow-md  border border-gray-200 hover:shadow-xl transition cursor-pointer"
          >
            <motion.img
              src="/aws-logo.png"
              alt="AWS Partner Network"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-52 h-auto mb-6"
            />

            <h2 className="text-2xl font-semibold mb-4 text-[#FF9900]">
              AWS Consulting Partner
            </h2>

            <p className="text-gray-600 font-inter leading-relaxed">
              AWS provides on-demand cloud computing solutions for individuals,
              companies, and governments. The platform enables scalable, virtual
              computing power and secure cloud infrastructure on a subscription
              basis.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
