import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-white h-[100vh]">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          

          <div className="mx-auto max-w-2xl py-3 sm:py-48 lg:py-56">
            
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Add Schools to the Database
              </h1>
              
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/AddSchoolPage"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add 
                </a>
                <a
                  href="/ShowSchools"
                  className="text-lg font-semibold leading-6 text-gray-900"
                >
                  Fetch  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
