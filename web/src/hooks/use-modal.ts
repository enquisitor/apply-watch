import { useState, useCallback } from 'react';

export const useModalManager = () => {
  const [isOpenModals, seIsOpenModals] = useState<string[]>([]);

  const showModal = useCallback((modalName: string) => {
    seIsOpenModals((prev) => [...prev, modalName]);
  }, []);

  const hideModal = useCallback((modalName: string) => {
    seIsOpenModals((prev) => prev.filter((modal) => modal !== modalName));
  }, []);

  return { showModal, hideModal, isOpenModals };
};
