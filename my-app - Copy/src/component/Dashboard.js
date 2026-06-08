import React from 'react';

function Dashboard({ userEmail, onLogout }) {
  return (
    <div style={{padding:32,fontFamily:'sans-serif',backgroundColor:'#e2e8f0',minHeight:'100vh'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{textAlign:'center',padding:'22px 30px',borderRadius:28,background:'linear-gradient(135deg,rgba(229,231,235,0.95),rgba(203,213,219,0.95))',boxShadow:'0 28px 60px rgba(15,23,42,0.12)',maxWidth:520,width:'100%'}}>
          <div style={{width:104,height:104,margin:'0 auto 16px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,#d1d5db,#9ca3af)'}}>
            <span style={{fontSize:28,fontWeight:800,color:'#0f172a'}}>KMHR</span>
          </div>
          <div style={{fontSize:24,fontWeight:800,color:'#0f172a'}}>Welcome to KMHR IT Training</div>
          <p style={{margin:'10px auto 0',maxWidth:400,color:'#334155',lineHeight:1.7}}>Access your KMHR training dashboard next to Kalaiponni. Track your training and internship progress here.</p>
        </div>
      </div>

      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,marginTop:28,backgroundColor:'#cbd5e1',padding:'22px 26px',borderRadius:24}}>
        <div>
          <h1>Dashboard</h1>
          <div style={{marginTop:8,color:'#475569'}}>Signed in as: <strong>{userEmail || 'Student'}</strong></div>
        </div>
        <div>
          <button onClick={onLogout} style={{padding:'10px 16px',borderRadius:8,border:'none',backgroundColor:'#0f172a',color:'#f8fafc',cursor:'pointer'}}>Logout</button>
        </div>
      </header>

      <main style={{marginTop:32}}>
        <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20}}>
          <div style={{padding:20,border:'1px solid #cbd5e1',borderRadius:18,backgroundColor:'#ffffff'}}>
            <h3>IT Course Enrollment</h3>
            <p>See your current IT training batches and join upcoming sessions for web development, networking, and data science.</p>
          </div>
          <div style={{padding:20,border:'1px solid #cbd5e1',borderRadius:18,backgroundColor:'#ffffff'}}>
            <h3>Batch Status</h3>
            <p>Track your enrolled batch, session schedule, and training progress at KMHR IT Center.</p>
          </div>
          <div style={{padding:20,border:'1px solid #cbd5e1',borderRadius:18,backgroundColor:'#ffffff'}}>
            <h3>KMHR Joined</h3>
            <p>Congratulations! You are now part of the KMHR IT Center training program.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
