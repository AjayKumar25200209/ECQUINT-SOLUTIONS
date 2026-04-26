import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const styles = {
  success: {
    container: "border-green-200 bg-white",
    accent: "bg-green-500",
    iconBg: "bg-green-100 text-green-600",
  },
  error: {
    container: "border-red-200 bg-white",
    accent: "bg-red-500",
    iconBg: "bg-red-100 text-red-600",
  },
  info: {
    container: "border-blue-200 bg-white",
    accent: "bg-blue-500",
    iconBg: "bg-blue-100 text-blue-600",
  },
  warn: {
    container: "border-yellow-200 bg-white",
    accent: "bg-yellow-500",
    iconBg: "bg-yellow-100 text-yellow-600",
  },
}

const icons = {
  success: "✓",
  error: "✕",
  info: "i",
  warn: "!",
}

const Notification = ({ message, type = "info", onClose }) => {
  useEffect(() => {
    if (!message) return

    const timer = setTimeout(() => {
      onClose()
    }, 4000)

    return () => clearTimeout(timer)
  }, [message, onClose])

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className={`fixed bottom-6 right-6 z-50 w-[320px] rounded-xl border shadow-xl overflow-hidden backdrop-blur ${styles[type].container}`}
          role="alert"
          aria-live="assertive"
        >
          <div className="flex">

            {/* LEFT ACCENT BAR */}
            <div className={`w-1 ${styles[type].accent}`} />

            {/* CONTENT */}
            <div className="flex gap-3 p-4 w-full">

              {/* ICON */}
              <div className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold ${styles[type].iconBg}`}>
                {icons[type]}
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <p className="text-sm text-gray-900 leading-relaxed">
                  {message}
                </p>
              </div>

              {/* CLOSE */}
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-700 text-sm"
                aria-label="Close notification"
              >
                ✕
              </button>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification