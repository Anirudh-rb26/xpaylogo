import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Send } from '@/components/animate-ui/icons/send'
import { AnimateIcon } from '@/components/animate-ui/icons/icon'
import { Paperclip } from '@/components/animate-ui/icons/paperclip'
import { PhoneCall } from '@/components/animate-ui/icons/phone-call'
import { RefreshCw } from '@/components/animate-ui/icons/refresh-cw'
import { ExternalLink } from '@/components/animate-ui/icons/external-link'
import { Copy } from '@/components/animate-ui/icons/copy'
import { SetStateAction } from 'react'

const logoCode = `import { motion, easeInOut } from 'framer-motion'

const XpayLogo = () => {

    const leftBarVariants = {
        initial: { opacity: 0, height: 0, skewX: 0 },
        animate: { opacity: 1, height: '100%', skewX: -25 }
    };

    const rightBarVariants = {
        initial: { opacity: 0, height: 0, skewX: 0 },
        animate: { opacity: 1, height: '100%', skewX: 25 }
    };

    const textVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    };

    return (
        < div className="flex items-center justify-center gap-8">
            <div className="relative w-16 h-32 shrink-0">
                {/* Left bar */}
                <motion.div
                    variants={leftBarVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 1.5, ease: easeInOut }}
                    className="absolute w-16 h-32 origin-center"
                    style={{ transformOrigin: 'center', transform: 'skewX(-25deg)' }}
                >
                    <motion.div
                        className="w-full rounded-2xl rounded-br-none rounded-tl-none"
                        style={{
                            background: 'linear-gradient(to bottom, #0033fe, #79e9ae, #36c4ff)',
                            filter: "drop-shadow(0 0 3px #0ff)",
                            position: 'absolute',
                            bottom: 0,
                        }}
                    />
                </motion.div>

                {/* Right bar */}
                <motion.div
                    variants={rightBarVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 1.5, ease: easeInOut }}
                    className="absolute w-16 h-32 origin-center"
                    style={{ transformOrigin: 'center', transform: 'skewX(25deg)' }}
                >
                    <motion.div
                        className="w-full rounded-2xl rounded-tr-none rounded-bl-none"
                        style={{
                            background: 'linear-gradient(to bottom, #049ef8, #79e9ae, #00e370)',
                            filter: "drop-shadow(0 0 3px #0ff)",
                            position: 'absolute',
                            bottom: 0,
                        }}
                    />
                </motion.div>
            </div>

            {/* Pay Text */}
            <motion.h1
                variants={textVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1, ease: easeInOut }}
                className="text-7xl font-bold text-white"
                style={{ filter: "drop-shadow(0 0 1px #fff)" }}
            >
                Pay
            </motion.h1 >
        </div >
    )
}

export default XpayLogo;
`;

const copyLogocode = () => {
    navigator.clipboard.writeText(logoCode).then(() => toast("Code Copied"));
}

const ButtonBar = ({ isAnimating }: { isAnimating: React.Dispatch<SetStateAction<number>> }) => {
    return (
        <div className='flex flex-col gap-4 items-center justify-center'>
            <div className='flex flex-row gap-6'>
                <AnimateIcon animateOnHover>
                    <Button variant={'outline'} onClick={() => isAnimating(prev => prev + 1)}>Re-Animate <RefreshCw animation={'rotate'} /> </Button>
                </AnimateIcon>
                <AnimateIcon animateOnHover>
                    <Button variant={'outline'} onClick={copyLogocode}>Copy Logo Code <Copy /> </Button>
                </AnimateIcon>
            </div>
            <div className='flex flex-row gap-6'>
                <AnimateIcon animateOnHover>
                    <Button variant={'outline'} onClick={() => window.open("https://github.com/Anirudh-rb26")}>Github <ExternalLink /> </Button>
                </AnimateIcon>
                <AnimateIcon animateOnHover>
                    <Button variant={'outline'} onClick={() => window.open("https://anirudhs-portfolio.vercel.app/")}>Portfolio <ExternalLink /> </Button>
                </AnimateIcon>
                <AnimateIcon animateOnHover>
                    <Button
                        variant={'outline'}
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/AnirudhJayakumar_Resume.pdf';
                            link.download = 'AnirudhJayakumar_Resume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}>
                        Resume
                        <Paperclip />
                    </Button>
                </AnimateIcon>
                <AnimateIcon animateOnHover>
                    <Button variant={'outline'} onClick={() => { navigator.clipboard.writeText("anirudhjayakumar.business@gmail.com").then(() => toast("Email copied to clipboard!")) }}>Mail <Send /> </Button>
                </AnimateIcon>
                <AnimateIcon animateOnHover>
                    <Button variant={'outline'} onClick={() => { navigator.clipboard.writeText("+919995563513").then(() => toast("Phone No: copied to clipboard!")) }}>Phone (Whatsapp only) <PhoneCall /> </Button>
                </AnimateIcon>
            </div>
        </div >
    )
}

export default ButtonBar