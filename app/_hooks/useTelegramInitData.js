import { useEffect, useState } from 'react';

export function useTelegramInitData() {
  const [data, setData] = useState({})

  useEffect(() => {
    const firstLayerInitData = Object.fromEntries(
      new URLSearchParams(window.Telegram?.WebApp?.initData)
    )

    const initData = {}

    for (const key in firstLayerInitData) {
      try {
        initData[key] = JSON.parse(firstLayerInitData[key])
      } catch {
        initData[key] = firstLayerInitData[key]
      }
    }

    setData(initData)
  }, [])

  return data
}