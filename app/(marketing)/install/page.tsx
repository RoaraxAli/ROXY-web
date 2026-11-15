import InstallContent from '../../../content/install-content'

export const metadata = {
  title: 'Download ROXY',
  description: 'Download the open-source ROXY desktop workspace for Windows or Linux.',
}

export default function Install() {
  return <div className="wrap install-route"><InstallContent /></div>
}
