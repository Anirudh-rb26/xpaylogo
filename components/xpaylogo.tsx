import { motion, easeInOut, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react';

const XpayLogo = ({ animating }: { animating: number }) => {

    const animationControls = useAnimationControls();

    useEffect(() => {
        animationControls.set("initial");
        animationControls.start("animate");
        console.log("use effect ran animate")
    }, [animating, animationControls])

    const leftBarVariants = {
        initial: { opacity: 0, skewX: 0 },
        animate: { opacity: 1, skewX: -25 }
    };

    const rightBarVariants = {
        initial: { opacity: 0, skewX: 0 },
        animate: { opacity: 1, skewX: 25 }
    };

    const barFillVariants = {
        initial: { clipPath: 'inset(50% 0% 50% 0%)' },
        animate: { clipPath: 'inset(0% 0% 0% 0%)' }
    };

    const textVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    };

    const textRevealVariants = {
        initial: { width: 0 },
        animate: { width: '100%' }
    };

    return (
        < div className="flex items-center justify-center gap-8">
            <div className="relative w-16 h-32 shrink-0">
                {/* Left bar */}
                <motion.div
                    variants={leftBarVariants}
                    initial="initial"
                    animate={animationControls}
                    transition={{ duration: 1.5, ease: easeInOut }}
                    className="absolute w-16 h-32 origin-center"
                    style={{ transformOrigin: 'center', transform: 'skewX(-25deg)', filter: "drop-shadow(0 0 3px #0ff)", }}
                >
                    <motion.div
                        className="w-full h-full rounded-2xl rounded-br-none rounded-tl-none"
                        variants={barFillVariants}
                        initial="initial"
                        animate={animationControls}
                        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
                        style={{
                            background: 'linear-gradient(to bottom, #0033fe, #79e9ae, #36c4ff)',
                            position: 'absolute',
                            bottom: 0,
                            top: "auto"
                        }}
                    />
                </motion.div>

                {/* Right bar */}
                <motion.div
                    variants={rightBarVariants}
                    initial="initial"
                    animate={animationControls}
                    transition={{ duration: 1.5, ease: easeInOut }}
                    className="absolute w-16 h-32 origin-center"
                    style={{ transformOrigin: 'center', transform: 'skewX(25deg)', filter: "drop-shadow(0 0 3px #0ff)" }}
                >
                    <motion.div
                        className="w-full h-full rounded-2xl rounded-tr-none rounded-bl-none"
                        variants={barFillVariants}
                        initial="initial"
                        animate={animationControls}
                        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
                        style={{
                            background: 'linear-gradient(to bottom, #049ef8, #79e9ae, #00e370)',
                            position: 'absolute',
                            bottom: 0,
                            top: "auto"
                        }}
                    />
                </motion.div>
            </div>

            {/* Pay Text */}
            <div className="relative overflow-hidden">
                {/* Pay Text */}
                <motion.div
                    variants={textRevealVariants}
                    initial="initial"
                    animate={animationControls}
                    transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
                    className="relative overflow-hidden"
                >
                    <motion.h1
                        variants={textVariants}
                        initial="initial"
                        animate={animationControls}
                        transition={{ duration: 1.5, ease: easeInOut }}
                        className="text-7xl font-bold text-white"
                        style={{ filter: "drop-shadow(0 0 1px #fff)" }}
                    >
                        Pay
                    </motion.h1>
                </motion.div>
            </div>
        </div >
    )
}

export default XpayLogo;