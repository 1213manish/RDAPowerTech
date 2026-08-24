import React, { createContext, useContext, useState } from 'react';
import QuoteModal from '../components/common/QuoteModal';

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [isMandatory, setIsMandatory] = useState(false);
  const [isPricingUnlocked, setIsPricingUnlocked] = useState(() => {
    try {
      return localStorage.getItem('rda_pricing_unlocked') === 'true';
    } catch {
      return false;
    }
  });

  const unlockPricing = (userData = null) => {
    setIsPricingUnlocked(true);
    try {
      localStorage.setItem('rda_pricing_unlocked', 'true');
      if (userData) {
        localStorage.setItem('rda_user_lead', JSON.stringify(userData));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const openQuoteModal = (productName = '', options = {}) => {
    setSelectedProduct(productName);
    setIsMandatory(Boolean(options?.isMandatory));
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setSelectedProduct('');
    setIsMandatory(false);
  };

  return (
    <QuoteContext.Provider value={{ openQuoteModal, closeQuoteModal, isPricingUnlocked, unlockPricing }}>
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeQuoteModal}
        defaultProduct={selectedProduct}
        isMandatory={isMandatory}
        onSuccess={(payload) => {
          unlockPricing(payload);
        }}
      />
    </QuoteContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteProvider');
  }
  return context;
}
