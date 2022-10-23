import { Dialog } from '@headlessui/react';
import { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="underline">
        Contact Us
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* BACKDROP SHADOW */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-dark rounded-primary border-2 p-6">
            {/* <Dialog.Title>Contact Us</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description> */}

            <p className="md:text-xl">
              Email -{' '}
              <a href="mailto:austin@buildlify.dev" className="underline">
                austin@buildlify.dev
              </a>
            </p>
            <p className="md:text-xl">
              Phone Number -{' '}
              <a href="tel:12085013500" className="underline">
                1 (208)-501-3500
              </a>
            </p>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
