import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
// Import all slides
import { Slide01Cover } from '../components/slides/Slide01Cover';
import { Slide02Problem } from '../components/slides/Slide02Problem';
import { Slide03Insight } from '../components/slides/Slide03Insight';
import { Slide04Solution } from '../components/slides/Slide04Solution';
import { Slide05Differentiation } from '../components/slides/Slide05Differentiation';
import { Slide06TargetUsers } from '../components/slides/Slide06TargetUsers';
import { Slide07ProductOverview } from '../components/slides/Slide07ProductOverview';
import { Slide08WhyNow } from '../components/slides/Slide08WhyNow';
import { Slide09Vision } from '../components/slides/Slide09Vision';
import { Slide10Market } from '../components/slides/Slide10Market';
import { Slide11Positioning } from '../components/slides/Slide11Positioning';
import { Slide12Costs } from '../components/slides/Slide12Costs';
import { Slide13CostBreakdown } from '../components/slides/Slide13CostBreakdown';
import { Slide14WhyLean } from '../components/slides/Slide14WhyLean';
import { Slide15FundraisingObjective } from '../components/slides/Slide15FundraisingObjective';
import { Slide16FundraisingStage } from '../components/slides/Slide16FundraisingStage';
import { Slide17CapitalAsk } from '../components/slides/Slide17CapitalAsk';
import { Slide18Allocation } from '../components/slides/Slide18Allocation';
import { Slide19Milestones } from '../components/slides/Slide19Milestones';
import { Slide20Metrics } from '../components/slides/Slide20Metrics';
import { Slide21NextRound } from '../components/slides/Slide21NextRound';
import { Slide22Efficiency } from '../components/slides/Slide22Efficiency';
import { Slide23Risks } from '../components/slides/Slide23Risks';
import { Slide24Optionality } from '../components/slides/Slide24Optionality';
import { Slide25Closing } from '../components/slides/Slide25Closing';
const slides = [Slide01Cover, Slide02Problem, Slide03Insight, Slide04Solution, Slide05Differentiation, Slide06TargetUsers, Slide07ProductOverview, Slide08WhyNow, Slide09Vision, Slide10Market, Slide11Positioning, Slide12Costs, Slide13CostBreakdown, Slide14WhyLean, Slide15FundraisingObjective, Slide16FundraisingStage, Slide17CapitalAsk, Slide18Allocation, Slide19Milestones, Slide20Metrics, Slide21NextRound, Slide22Efficiency, Slide23Risks, Slide24Optionality, Slide25Closing];
export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeDocId, setActiveDocId] = useState('intro');
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);
  const handleDocChange = (id: string) => {
    setActiveDocId(id);
    // Có thể thêm logic để chuyển slide dựa trên docId nếu cần
  };

  const CurrentSlideComponent = slides[currentSlide];
  return <div className="min-h-screen bg-white overflow-hidden relative font-sans text-slate-900">
      <Header currentSlide={currentSlide} totalSlides={slides.length} />
      
      <div className="pt-20 pb-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div key={currentSlide} custom={direction} initial={{
          opacity: 0,
          x: direction > 0 ? 100 : -100
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: direction > 0 ? -100 : 100
        }} transition={{
          duration: 0.4,
          ease: 'easeInOut'
        }} className="w-full min-h-screen">
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="fixed bottom-24 left-0 right-0 z-40 px-6">
        <div className="max-w-6xl mx-auto">
          <Footer activeId={activeDocId} onChange={handleDocChange} />
        </div>
      </div>

      <Navigation currentSlide={currentSlide} totalSlides={slides.length} onNext={handleNext} onPrev={handlePrev} />
    </div>;
}