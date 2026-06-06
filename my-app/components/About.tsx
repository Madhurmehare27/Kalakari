
"use client";

import { motion } from "framer-motion";
import MissionCard from "@/components/comman/ImageCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <section className="bg-[#3a2030] min-h-screen  p-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-4
          
        "
      >
        {/* Mission */}
        <motion.div
          variants={item}
          className=" lg:col-span-4
  lg:row-span-2  "
        >
          <MissionCard
            title="Our Mission"
            image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200"
            height="h-[340px]"
          />
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={item}
          className=" lg:col-span-4
  lg:row-span-3"
        >
          <MissionCard
            title=" creative"
            image="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200"
            height="h-[410px]"
          />
        </motion.div>

        {/* Approach */}
        <motion.div
          variants={item}
          className="
         lg:col-span-3
  lg:row-span-2
            bg-[#ece7f2]
            rounded-[24px]
            p-8
            h-[410px]
            flex
            flex-col
            justify-between
          "
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500">
              OUR APPROACH
            </span>

            <div className="mt-10 space-y-5 text-xl text-gray-600">
              <p>Handmade with precision</p>
              <p>Tailored for each customer</p>
              <p>Eco-friendly choices</p>
              <p>Prompt, secure shipping</p>
            </div>
          </div>

          <button className="font-semibold text-gray-800">
            View Steps →
          </button>
        </motion.div>

        {/* Creativity */}
        <motion.div
          variants={item}
          className=" lg:col-span-3
  lg:row-span-4"
        >
          <MissionCard
            title="Purposeful Creativity"
            image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200"
            height="h-[500px]"
          />
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={item}
          className="
            lg:col-span-4
            bg-[#bcb4bc]
            rounded-[24px]
            h-[300px]
            flex
            flex-col
            justify-center
            items-center
            text-center
            p-8
          "
        >
          <span className="uppercase text-xs tracking-widest text-white">
            CORE VALUES
          </span>

          <h2 className="text-5xl text-white mt-6">
            Quality above all
          </h2>

          <p className="mt-4 text-white/80">
            Every piece is made with ethical materials
            and lasting craftsmanship.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          variants={item}
          className="
           
            bg-[#e8f2f5]
            rounded-[24px]
            p-4
            h-[300px]
             lg:col-span-4
  lg:row-span-10
          "
        >
          <div className="grid grid-cols-4 gap-2 h-full">
            {[
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500",
              "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=500",
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
              "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=500",
            ].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full rounded-xl object-cover"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

