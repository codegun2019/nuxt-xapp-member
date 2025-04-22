// ไฟล์ config สำหรับธีมและอนิเมชั่น

export const themeConfig = {
  // สีหลักของแอปพลิเคชัน
  colors: {
    brand: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',  // สีชมพูหลัก
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724',
    },
    primary: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724",
    },
    secondary: {
      // สีรอง (ถ้ามี)
      500: "#0ea5e9", // สีฟ้า
      600: "#0284c7",
    },
    success: {
      500: "#22c55e", // สีเขียว
      600: "#16a34a",
    },
    warning: {
      500: "#f59e0b", // สีส้ม
      600: "#d97706",
    },
    error: {
      500: "#ef4444", // สีแดง
      600: "#dc2626",
    },
  },

  // รูปแบบของปุ่ม
  buttons: {
    primary: {
      base: "rounded-full font-bold flex items-center justify-center transition-all duration-200 relative overflow-hidden",
      size: {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-base",
        lg: "py-4 px-8 text-lg",
      },
      variant: {
        solid:
          "bg-gradient-to-b from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/20 hover:scale-[1.02]",
        outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
        ghost: "text-primary-500 hover:bg-primary-50",
      },
    },
    secondary: {
      // คล้ายกับ primary แต่ใช้สี secondary
    },
  },

  // รูปแบบของ input
  inputs: {
    base: "w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500",
  },

  // รูปแบบของ card
  cards: {
    base: "bg-white rounded-2xl shadow-sm p-6 border border-gray-100",
  },

  // รูปแบบของ popup
  popups: {
    base: "bg-white rounded-3xl max-w-md w-full mx-4 shadow-xl overflow-hidden",
    animations: {
      "scale-in": {
        enter: "transition-all duration-300 ease-out",
        enterFrom: "opacity-0 scale-90",
        enterTo: "opacity-100 scale-100",
        leave: "transition-all duration-200 ease-in",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-90",
      },
      "slide-down": {
        enter: "transition-all duration-300 ease-out",
        enterFrom: "opacity-0 -translate-y-10",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition-all duration-200 ease-in",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 -translate-y-10",
      },
      "slide-up": {
        enter: "transition-all duration-300 ease-out",
        enterFrom: "opacity-0 translate-y-10",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition-all duration-200 ease-in",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 translate-y-10",
      },
      "bounce-in": {
        enter: "animate-bounce-in",
        leave: "animate-bounce-out",
        enterFrom: "opacity-0 scale-90",
        enterTo: "opacity-100 scale-100",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-90",
      },
    },
    // อนิเมชั่นเริ่มต้น
    defaultAnimation: "scale-in",
  },
}

// ฟังก์ชันสำหรับดึงค่า config
export function getThemeConfig(path, defaultValue = undefined) {
  const keys = path.split(".")
  let result = themeConfig

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key]
    } else {
      return defaultValue
    }
  }

  return result
}
