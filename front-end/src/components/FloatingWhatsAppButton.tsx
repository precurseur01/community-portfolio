const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/237670616710"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-[#25D366]
        flex items-center justify-center
        shadow-lg
        hover:scale-110 hover:shadow-2xl
        transition-all duration-300
      "
    >
      {/* Icône WhatsApp officielle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16.003 3C9.373 3 4 8.373 4 15.003c0 2.647.863 5.096 2.332 7.073L4 29l7.13-2.29A11.93 11.93 0 0016.003 27C22.633 27 28 21.627 28 15.003 28 8.373 22.633 3 16.003 3zm0 21.82a9.8 9.8 0 01-4.99-1.36l-.36-.21-4.23 1.36 1.38-4.12-.23-.38a9.77 9.77 0 1118.43-5.1 9.79 9.79 0 01-9.997 9.81zm5.38-7.39c-.29-.14-1.71-.84-1.98-.94-.27-.1-.47-.14-.67.14-.2.29-.77.94-.94 1.14-.17.2-.34.23-.63.09-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.2-.29.29-.48.1-.2.05-.38-.02-.53-.07-.14-.67-1.61-.92-2.21-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.53.07-.81.38-.28.31-1.06 1.04-1.06 2.53s1.09 2.93 1.24 3.13c.14.2 2.15 3.28 5.21 4.6.73.31 1.3.5 1.75.64.73.23 1.39.2 1.91.12.58-.09 1.71-.7 1.95-1.38.24-.67.24-1.24.17-1.38-.07-.14-.27-.23-.56-.38z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;
