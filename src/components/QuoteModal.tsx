import { motion, AnimatePresence } from 'motion/react';
import { X, Quote as QuoteIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const HVAC_QUOTES = [
    {
        text: "The bitterness of poor quality remains long after the sweetness of low price is forgotten.",
        author: "Benjamin Franklin",
        context: "A reminder that investing in a quality HVAC system pays off in the long run."
    },
    {
        text: "Quality means doing it right when no one is looking.",
        author: "Henry Ford",
        context: "Our commitment to every installation and repair."
    },
    {
        text: "It takes less time to do a thing right, than it does to explain why you did it wrong.",
        author: "Henry Wadsworth Longfellow",
        context: "We believe in getting your AC fixed right the very first time."
    },
    {
        text: "Pleasure in the job puts perfection in the work.",
        author: "Aristotle",
        context: "Our technicians take pride in mastering their climate control craft."
    }
];

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    const [quoteIndex, setQuoteIndex] = useState(0);

    // Pick a random quote when the modal opens
    useEffect(() => {
        if (isOpen) {
            setQuoteIndex(Math.floor(Math.random() * HVAC_QUOTES.length));
        }
    }, [isOpen]);

    const quote = HVAC_QUOTES[quoteIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                        className="fixed left-1/2 top-1/2 -tranzinc-x-1/2 -tranzinc-y-1/2 w-full max-w-2xl bg-black border border-zinc-700 rounded-3xl shadow-2xl z-[60] overflow-hidden p-8 md:p-12 w-[calc(100%-2rem)]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative">
                            <QuoteIcon className="absolute -top-4 -left-4 w-12 h-12 text-yellow-500/20" />

                            <blockquote className="relative z-10 pt-4 pb-6">
                                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-display font-medium leading-relaxed tracking-tight text-center">
                                    "{quote.text}"
                                </p>
                            </blockquote>

                            <div className="text-center">
                                <cite className="text-yellow-400 font-bold text-lg not-italic block mb-2">— {quote.author}</cite>
                                <p className="text-zinc-400 text-sm italic">{quote.context}</p>
                            </div>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
