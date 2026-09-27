import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialStories from './components/EditorialStories';
import EditorialWorks from './components/EditorialWorks';
import EditorialMonologue from './components/EditorialMonologue';
import EditorialRepresentation from './components/EditorialRepresentation';
import ConciergeChat from './components/ConciergeChat';
import StoryModal from './components/StoryModal';
import ShowreelModal from './components/ShowreelModal';

export default function App() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian-950 text-neutral-100 flex flex-col relative selection:bg-gold-500/30 selection:text-gold-200 antialiased overflow-x-hidden">
      {/* Editorial Masthead Navbar */}
      <Navbar onOpenChat={() => setChatOpen(true)} />

      <main className="flex-1">
        {/* GQ / Vogue High-Fashion Cover Hero */}
        <Hero
          onOpenVideoModal={() => setShowreelOpen(true)}
          onOpenStory={(idx) => setSelectedStoryIndex(idx)}
        />

        {/* Editorial Stories & Dispatches Ticker */}
        <EditorialStories
          onSelectStory={(index) => setSelectedStoryIndex(index)}
        />

        {/* Single-Page Massive Cinematic Photography Spreads */}
        <EditorialWorks
          onOpenChat={() => setChatOpen(true)}
        />

        {/* Monologue Pull-Quote Spread: "The Anatomy of Silence" */}
        <EditorialMonologue />

        {/* Clean Luxury Representation, Inquire Desk & Contact */}
        <EditorialRepresentation
          onOpenChat={() => setChatOpen(true)}
        />
      </main>

      {/* 24/7 Executive Live Concierge Chat Desk */}
      <ConciergeChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onOpen={() => setChatOpen(true)}
      />

      {/* Full-Screen Editorial Story Viewer Modal */}
      {selectedStoryIndex !== null && (
        <StoryModal
          storyIndex={selectedStoryIndex}
          onClose={() => setSelectedStoryIndex(null)}
          onOpenChat={() => setChatOpen(true)}
        />
      )}

      {/* Monologue Video Showreel Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onOpenChat={() => setChatOpen(true)}
      />
    </div>
  );
}
