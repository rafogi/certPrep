import { X } from 'lucide-react'
import RobotIcon from '@/components/CertBot/RobotIcon'

interface RobotButtonProps {
  vendorColor: string
  isOpen: boolean
  onClick: () => void
}

function RobotButton({ vendorColor, isOpen, onClick }: RobotButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Close CertBot' : 'Open CertBot study assistant'}
      className="fixed bottom-4 right-4 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      style={{ backgroundColor: vendorColor }}
    >
      {isOpen
        ? <X className="w-7 h-7 text-white" aria-hidden="true" />
        : <RobotIcon className="w-7 h-7 text-white" aria-hidden="true" />
      }
    </button>
  )
}

export default RobotButton
