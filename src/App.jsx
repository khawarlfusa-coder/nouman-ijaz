import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatusStories from './components/StatusStories';
import StoryModal from './components/StoryModal';
import Biography from './components/Biography';
import Filmography from './components/Filmography';
import UpcomingProjects from './components/UpcomingProjects';
import InternationalTours from './components/InternationalTours';
import CommercialsAndUGC from './components/CommercialsAndUGC';
import SocialFeed from './components/SocialFeed';
import ContactAndBooking from './components/ContactAndBooking';
import Footer from './components/Footer';
import ConciergeChat from './components/ConciergeChat';
import ShowreelModal from './components/ShowreelModal';

export default function App() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Audio tone synthesizer for cinema ambiance when enabled
  useEffect(() => {
    if (!soundEnabled) return;

    let audioCtx;
    let osc;
    let gain;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      osc = audioCtx.createOscillator();
      gain = audioCtx.createGain();

      // Deep cinematic drone (F# 92Hz)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(92.5, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime); // Very soft background presence

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
    } catch (e) {
      console.log('Audio init prevented or not supported', e);
    }

    return () => {
      try {
        if (osc) osc.stop();
        if (audioCtx) audioCtx.close();
      } catch (err) {}
    };
  }, [soundEnabled]);

  return (
    <div className="min-h-screen bg-obsidian-950 text-neutral-100 flex flex-col relative selection:bg-gold-500/30 selection:text-gold-200">
      {/* Top Navbar */}
      <Navbar
        onOpenChat={() => setChatOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Hero Section */}
      <Hero
        onOpenVideoModal={() => setShowreelOpen(true)}
        onOpenStory={(idx) => setSelectedStoryIndex(idx)}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Main Page Social Stories / Status Feed (Instagram / WhatsApp Style) */}
      <StatusStories
        onSelectStory={(index) => setSelectedStoryIndex(index)}
      />

      {/* Comprehensive Biography & Awards */}
      <Biography />

      {/* Filmography & Character Masterpieces */}
      <Filmography
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Upcoming Cinema & OTT Projects */}
      <UpcomingProjects
        onOpenChat={() => setChatOpen(true)}
      />

      {/* International Tours & Appearances */}
      <InternationalTours
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Commercials, Brand Deals & UGC Ads Desk */}
      <CommercialsAndUGC
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Connected Social Feed & Handles */}
      <SocialFeed
        onOpenStory={(idx) => setSelectedStoryIndex(idx)}
      />

      {/* Official Management Contact & Booking */}
      <ContactAndBooking
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Footer */}
      <Footer
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Floating 24/7 AI Concierge Chat Assistant */}
      <ConciergeChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onOpen={() => setChatOpen(true)}
      />

      {/* Full-Screen Instagram / WhatsApp Style Story Player Modal */}
      {selectedStoryIndex !== null && (
        <StoryModal
          storyIndex={selectedStoryIndex}
          onClose={() => setSelectedStoryIndex(null)}
          onOpenChat={() => setChatOpen(true)}
        />
      )}

      {/* Parizaad & Masterclass Showreel Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onOpenChat={() => setChatOpen(true)}
      />
    </div>
  );
}
