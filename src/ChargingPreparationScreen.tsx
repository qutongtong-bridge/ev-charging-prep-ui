import React from 'react';

interface ChargingPreparationScreenProps {
  onBack?: () => void;
}

const StatusBar: React.FC = () => {
  return (
    <div style={styles.statusBar}>
      <span style={styles.time}>7:12</span>
      <div style={styles.statusIcons}>
        <span style={styles.icon}>📷</span>
        <span style={styles.icon}>G</span>
        <span style={styles.icon}>📧</span>
        <span style={styles.icon}>•</span>
        <span style={styles.icon}>🔇</span>
        <span style={styles.icon}>📶</span>
        <span style={styles.icon}>100%🔋</span>
      </div>
    </div>
  );
};

const ChargingPreparationScreen: React.FC<ChargingPreparationScreenProps> = ({ onBack }) => {
  return (
    <div style={styles.container}>
      <StatusBar />
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backButton}>
          ←
        </button>
        <h1 style={styles.headerTitle}>充電前準備</h1>
        <div style={styles.headerSpacer} />
      </div>

      <div style={styles.content}>
        <StepIndicator currentStep={3} />
        
        <div style={styles.mainContent}>
          <h2 style={styles.mainTitle}>
            SBPSテストの<br />
            利用を開始します。
          </h2>
          
          <ChargingStationInfo />
          <ChargingDetails />
          <PricingInfo />
          <WarningMessages />
        </div>
      </div>
    </div>
  );
};

const StepIndicator: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const steps = [
    { id: 1, label: '車室選択', color: '#FF6B00' },
    { id: 2, label: '出力選択', color: '#FF6B00' },
    { id: 3, label: '内容確認', color: '#FF6B00' },
    { id: 4, label: '入庫', color: '#999' },
  ];

  return (
    <div style={styles.stepContainer}>
      <div style={styles.stepIndicator}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div style={styles.stepItem}>
              <div style={{
                ...styles.stepCircle,
                backgroundColor: currentStep >= step.id ? step.color : '#E0E0E0'
              }} />
              <span style={{
                ...styles.stepLabel,
                color: currentStep >= step.id ? step.color : '#999'
              }}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div style={{
                ...styles.stepLine,
                backgroundColor: currentStep > step.id ? '#FF6B00' : '#E0E0E0'
              }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const ChargingStationInfo: React.FC = () => {
  return (
    <div style={styles.stationInfo}>
      <h3 style={styles.stationTitle}>SBPSテスト</h3>
      <p style={styles.stationAddress}>東京都品川区大崎２丁目１－１</p>
      <div style={styles.stationLogo}>
        <span style={styles.logoText}>Payment</span>
      </div>
    </div>
  );
};

const ChargingDetails: React.FC = () => {
  return (
    <div style={styles.chargingDetails}>
      <h4 style={styles.sectionTitle}>充電器</h4>
      
      <div style={styles.chargingSpec}>
        <div style={styles.chargingIcon}>
          <div style={styles.plugIcon}>
            <div style={styles.plugNumber}>
              <span style={styles.plugNumberText}>1</span>
            </div>
          </div>
        </div>
        
        <div style={styles.chargingInfo}>
          <p style={styles.chargingType}>普通 6kW(ケーブル有)</p>
          <p style={styles.chargingPrice}>
            ¥100/15分 (1日最大 ¥100,000)
          </p>
        </div>
      </div>
    </div>
  );
};

const PricingInfo: React.FC = () => {
  return (
    <div style={styles.pricingSection}>
      <h4 style={styles.sectionTitle}>料金</h4>
      
      <div style={styles.pricingDetails}>
        <p style={styles.pricingText}>利用料金：¥100/15分</p>
        <p style={styles.pricingNote}>（ご請求予定合計料金：¥334）</p>
      </div>
    </div>
  );
};

const WarningMessages: React.FC = () => {
  const warnings = [
    '実際の利用時間に応じて、合計料金が変動します。',
    '利用開始から5分間、準備時間として無料でご利用頂けます',
    '駐車料金が別途かかる場合があります',
    '利用終了から10分経過後、超過料金が発生します',
  ];

  return (
    <div style={styles.warningSection}>
      {warnings.map((warning, index) => (
        <div key={index} style={styles.warningItem}>
          <span style={styles.warningIcon}>⚠️</span>
          <span style={styles.warningText}>{warning}</span>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100%',
    backgroundColor: '#F5F5F5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },
  statusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 16px',
    backgroundColor: '#E0E0E0',
    fontSize: '12px',
    fontWeight: '600',
  },
  time: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
  },
  statusIcons: {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    fontSize: '12px',
  },
  icon: {
    fontSize: '12px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#FFF',
    borderBottom: '1px solid #E0E0E0',
  },
  backButton: {
    padding: '8px',
    fontSize: '24px',
    color: '#333',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  headerTitle: {
    flex: 1,
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00BCD4',
    margin: 0,
  },
  headerSpacer: {
    width: '40px',
  },
  content: {
    width: '100%',
    flex: 1,
    overflowY: 'auto',
  },
  stepContainer: {
    backgroundColor: '#FFF',
    padding: '20px 16px',
  },
  stepIndicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  stepItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
  stepCircle: {
    width: '8px',
    height: '8px',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  stepLabel: {
    fontSize: '12px',
    fontWeight: '600',
  },
  stepLine: {
    position: 'absolute',
    height: '2px',
    width: 'calc(100% / 3)',
    top: '4px',
    left: 'calc(100% / 6)',
    transform: 'translateX(50%)',
    zIndex: 0,
  },
  mainContent: {
    padding: '16px',
  },
  mainTitle: {
    fontSize: '24px',
    color: '#00BCD4',
    textAlign: 'center',
    margin: '24px 0',
    lineHeight: '1.5',
  },
  stationInfo: {
    backgroundColor: '#FFF',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
    position: 'relative',
  },
  stationTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#FF6B00',
    marginBottom: '8px',
    margin: 0,
  },
  stationAddress: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '12px',
    margin: 0,
  },
  stationLogo: {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
  },
  logoText: {
    fontSize: '16px',
    fontStyle: 'italic',
    color: '#333',
  },
  chargingDetails: {
    backgroundColor: '#FFF',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '12px',
    margin: '0 0 12px 0',
  },
  chargingSpec: {
    display: 'flex',
    alignItems: 'center',
  },
  chargingIcon: {
    marginRight: '16px',
    position: 'relative',
  },
  plugIcon: {
    width: '60px',
    height: '80px',
    backgroundColor: '#333',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '8px',
    position: 'relative',
  },
  plugNumber: {
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: '#FF6B00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '-12px',
    right: '-12px',
  },
  plugNumberText: {
    color: '#FFF',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  chargingInfo: {
    flex: 1,
  },
  chargingType: {
    fontSize: '16px',
    color: '#FF6B00',
    marginBottom: '4px',
    margin: 0,
  },
  chargingPrice: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  pricingSection: {
    backgroundColor: '#FFF',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  pricingDetails: {
    marginTop: '8px',
  },
  pricingText: {
    fontSize: '16px',
    color: '#FF6B00',
    marginBottom: '4px',
    margin: 0,
  },
  pricingNote: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  warningSection: {
    marginBottom: '24px',
  },
  warningItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
  },
  warningIcon: {
    fontSize: '16px',
    marginRight: '8px',
  },
  warningText: {
    flex: 1,
    fontSize: '14px',
    color: '#00BCD4',
    lineHeight: '1.5',
  },
};

export default ChargingPreparationScreen;