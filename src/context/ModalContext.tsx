import React, { createContext, useContext, useState, useCallback } from 'react';

export interface UserSession {
  name: string;
  email: string;
  role: 'patient' | 'doctor';
}

export interface BookingDetails {
  doctorName?: string;
  specialty?: string;
  date?: string;
  time?: string;
  type?: 'video' | 'clinic';
}

interface ModalContextType {
  isLoginOpen: boolean;
  loginRole: 'patient' | 'doctor';
  openLogin: (role?: 'patient' | 'doctor') => void;
  closeLogin: () => void;

  isBookingOpen: boolean;
  bookingDoctor?: string;
  openBooking: (doctorName?: string) => void;
  closeBooking: () => void;

  user: UserSession | null;
  login: (userData: UserSession) => void;
  logout: () => void;

  toast: { message: string; type: 'success' | 'info' } | null;
  showToast: (message: string, type?: 'success' | 'info') => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginRole, setLoginRole] = useState<'patient' | 'doctor'>('patient');

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<string | undefined>(undefined);

  const [user, setUser] = useState<UserSession | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  const showToast = useCallback((message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 4000);
  }, []);

  const openLogin = useCallback((role: 'patient' | 'doctor' = 'patient') => {
    setLoginRole(role);
    setIsLoginOpen(true);
  }, []);

  const closeLogin = useCallback(() => {
    setIsLoginOpen(false);
  }, []);

  const openBooking = useCallback((doctorName?: string) => {
    setBookingDoctor(doctorName);
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
    setBookingDoctor(undefined);
  }, []);

  const login = useCallback((userData: UserSession) => {
    setUser(userData);
    setIsLoginOpen(false);
    showToast(`Welcome back, ${userData.name}!`, 'success');
  }, [showToast]);

  const logout = useCallback(() => {
    setUser(null);
    showToast('You have been logged out.', 'info');
  }, [showToast]);

  return (
    <ModalContext.Provider
      value={{
        isLoginOpen,
        loginRole,
        openLogin,
        closeLogin,
        isBookingOpen,
        bookingDoctor,
        openBooking,
        closeBooking,
        user,
        login,
        logout,
        toast,
        showToast,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
