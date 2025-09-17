"use client";

import { motion } from "framer-motion";
import {
  Image as ImageIcon,
  Video,
  Radio,
  Wand2,
  Edit,
  Mic,
  Users,
  Brain,
} from "lucide-react";

const tools = [
  {
    icon: ImageIcon,
    title: "Image",
    desc: "Generate images with custom styles in Flux and Ideogram.",
    badge: "New",
    color: "bg-gradient-to-br from-white to-gray-300",
  },
  {
    icon: Video,
    title: "Video",
    desc: "Generate videos with Haileu, Pika, Runway, Lumix, and more.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Radio,
    title: "Realtime",
    desc: "Realtime AI rendering on a camera. Instant feedback loops.",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Wand2,
    title: "Enhancer",
    desc: "Upscale and enhance images and videos up to 2K.",
    badge: "New",
    color: "bg-gray-100 text-gray-700",
  },
  {
    icon: Edit,
    title: "Edit",
    desc: "Add objects, change style, or expand photos and generations.",
    badge: "New",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Mic,
    title: "Video Lipsync",
    desc: "Lip sync any video to any audio.",
    badge: "New",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Users,
    title: "Motion Transfer",
    desc: "Transfer motion to images and animate characters.",
    badge: "New",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Brain,
    title: "Train",
    desc: "Teach Krea to replicate your style, products, or characters.",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function GenerateTools() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6 px-4">
        <h2 className="text-lg font-semibold">Generate</h2>
        <button className="text-sm text-blue-900 hover:underline">
          Show all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="flex flex-row items-center justify-between p-2 rounded-lg hover:shadow transition bg-white h-40"
          >
            <div className="flex items-start space-x-3">
              <div
                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg ${tool.color}`}
              >
                <tool.icon size={22} />
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-sm">{tool.title}</h3>
                  {tool.badge && (
                    <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{tool.desc}</p>
              </div>
            </div>

            <div className="flex justify-start mt-2">
              <button className="rounded-full px-4 py-2 bg-gray-100 text-xs font-bold hover:bg-gray-300">
                Open
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
