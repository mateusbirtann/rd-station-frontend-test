'use client'

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import useWindowSize from "@/hooks/useWindowSize"

type ModalProps = {
  className?: string;
};

const Modal = ({ className }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();

  const width = windowSize.width ?? 640;
  const height = windowSize.height ?? 390;

  const opts = {
    height: height > 640 ? '390' : '200',
    width: width > 640 ? '640' : '320',
    playerVars: {
      autoplay: 1 as 1,
    },
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className="mx-auto bg-white shadow-md overflow-hidden cursor-pointer"
        onClick={openModal}
      >
        <Image
        src="/video.png"
        width={649}
        height={365}
        alt='video'
        className='xl:h-[365px] xl:w-full'
        />
      </div>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-[1224px] sm:w-full">
              <div className="flex justify-center bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <YouTube videoId="eiiU-Fky18s" opts={opts} />
              </div>
              <div className="flex justify-center bg-gray-50 px-4 py-3 sm:px-6">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Fechar video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;