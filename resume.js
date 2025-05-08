pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const SKILLS_DB = [
  'python', 'java', 'c++', 'c', 'javascript', 'typescript', 'html', 'css', 'react', 'angular', 'vue',
  'node.js', 'express', 'flask', 'django', 'fastapi', 'spring', 'kotlin', 'swift', 'objective-c',
  'ruby', 'rails', 'sql', 'postgresql', 'mysql', 'sqlite', 'oracle', 'mongodb', 'redis',
  'machine learning', 'deep learning', 'neural networks', 'nlp', 'opencv', 'tensorflow', 'pytorch', 'keras',
  'scikit-learn', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'data visualization', 'data analysis', 'data mining',
  'ai', 'computer vision', 'devops', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'git', 'github', 'gitlab',
  'bitbucket', 'jira', 'confluence', 'testing', 'unit testing', 'integration testing', 'ci/cd', 'jenkins', 'ansible',
  'terraform', 'linux', 'bash', 'shell scripting', 'agile', 'scrum', 'system design', 'object oriented programming',
  'design patterns', 'rest', 'graphql', 'regression', 'classification', 'clustering', 'decision trees', 'random forest',
  'xgboost', 'lightgbm', 'sagemaker', 'mlops', 'time series', 'anomaly detection', 'forecasting', 'dimensionality reduction',
  'feature engineering', 'model tuning', 'bayesian models', 'markov chains', 'natural language processing', 'chatbots',
  'recommendation systems', 'genetic algorithms', 'reinforcement learning', 'unsupervised learning', 'ros', 'ros2', 'gazebo',
  'rviz', 'moveit', 'openrave', 'urdf', 'xacro', 'lidar', 'slam', 'path planning', 'kinematics', 'dynamics', 'embedded systems',
  'microcontrollers', 'arduino', 'raspberry pi', 'stm32', 'i2c', 'spi', 'uart', 'serial communication', 'control systems',
  'motor control', 'pid controller', 'simulink', 'matlab', 'vhdl', 'verilog', 'fpga', 'robot operating system',
  'navigation stack', 'turtlebot', 'jetson', 'robot vision', 'sensor fusion', 'process engineering', 'reaction engineering',
  'heat transfer', 'mass transfer', 'thermodynamics', 'unit operations', 'chemical kinetics', 'distillation', 'fluid mechanics',
  'simulation', 'aspen plus', 'aspen hysys', 'comsol', 'matlab', 'chemcad', 'hysys', 'plant design', 'safety engineering',
  'pfd', 'p&id', 'vlsi', 'digital design', 'analog design', 'signal processing', 'communication systems', 'wireless communication',
  'rf', 'microwave engineering', 'embedded c', 'verilog', 'vhdl', 'system verilog', 'ltspice', 'multisim', 'cadence', 'xilinx',
  'altera', 'fpga', 'asic', 'rtl design', 'sdr', 'power systems', 'electrical machines', 'transformers', 'circuit theory',
  'electromagnetics', 'smart grid', 'energy systems', 'power electronics', 'switchgear', 'hvac', 'hvdc', 'etap', 'load flow analysis',
  'power system protection', 'pscad', 'cad', 'cam', 'solidworks', 'catia', 'ansys', 'autocad', 'creo', 'nx', 'mechanics', 'strength of materials',
  'thermodynamics', 'fluid mechanics', 'hvac', 'refrigeration', 'heat exchangers', 'finite element analysis', 'cfd',
  'manufacturing processes', 'mechatronics', '3d printing', 'plm', 'robotics', 'autocad', 'staad pro', 'etabs', 'sap2000', 'primavera',
  'ms project', 'construction planning', 'geotechnical engineering', 'transportation engineering', 'structural engineering',
  'hydraulics', 'surveying', 'steel structures', 'reinforced concrete', 'building information modeling (bim)', 'metallurgy', 'xrd',
  'sem', 'materials science', 'material characterization', 'corrosion', 'alloy design', 'tensile testing', 'fracture mechanics',
  'biotechnology', 'molecular biology', 'genetics', 'bioprocess', 'bioreactor', 'fermentation', 'dna sequencing', 'proteomics',
  'bioinformatics', 'biochemistry', 'mathematical modeling', 'differential equations', 'linear algebra', 'probability', 'statistics',
  'quantum mechanics', 'organic chemistry', 'inorganic chemistry', 'analytical chemistry','thermodynamics', 'fluid mechanics', 'heat transfer', 'strength of materials', 'mechanics of materials',
  'engineering mechanics', 'machine design', 'theory of machines', 'vibrations', 'kinematics', 'dynamics',
  'mechanical measurements', 'mechanical vibrations', 'solidworks', 'autocad', 'creo', 'catia', 'nx',
  'ptc creo', 'fusion 360', 'cad', 'cam', 'computer-aided design', 'geometric dimensioning and tolerancing (GD&T)',
  '3d modeling', 'ansys', 'finite element analysis (FEA)', 'computational fluid dynamics (CFD)', 'abaqus',
  'hypermesh', 'matlab', 'simulink', 'engineering simulation', 'stress analysis', 'modal analysis',
  'thermal analysis', 'manufacturing processes', 'material science', 'metallurgy', 'casting', 'welding',
  'machining', 'cnc programming', 'additive manufacturing', '3d printing', 'rapid prototyping',
  'plm (product lifecycle management)', 'lean manufacturing', 'six sigma', 'quality control',
  'tolerance analysis', 'hvac', 'refrigeration', 'internal combustion engines', 'pumps', 'compressors',
  'turbomachinery', 'boilers', 'renewable energy', 'solar thermal systems', 'energy systems',
  'heat exchangers', 'ms project', 'staad pro', 'sap2000', 'primavera', 'project management',
  'p&id', 'pfd', 'engineering drawing', 'technical documentation', 'root cause analysis',
  'failure mode and effects analysis (FMEA)', 'mechatronics', 'robotics', 'arduino', 'raspberry pi',
  'embedded systems', 'control systems', 'sensor integration', 'iot in manufacturing',
  'automation', 'robotic process automation (RPA)', 'industrial automation', 'programmable logic controllers (PLC)',
  'scada', 'human-machine interface (HMI)', 'industrial internet of things (IIoT)',
  'machine learning in manufacturing', 'predictive maintenance', 'data analytics in manufacturing','thermodynamics', 'fluid mechanics', 'heat transfer', 'mass transfer', 'chemical reaction engineering',
  'process control', 'chemical kinetics', 'process modeling', 'process simulation', 'unit operations',
  'transport phenomena', 'separation processes', 'distillation', 'absorption', 'extraction',
  'membrane processes', 'crystallization', 'drying operations', 'reactor design', 'batch processes',
  'continuous processes', 'cfd', 'aspen plus', 'aspen hysys', 'chemcad', 'comsol multiphysics',
  'matlab', 'simulink', 'python for process modeling', 'hysys', 'pro/ii', 'process flow diagram (PFD)',
  'piping and instrumentation diagram (P&ID)', 'equipment sizing', 'plant design', 'process integration',
  'pinch analysis', 'energy optimization', 'material and energy balance', 'safety engineering',
  'hazard and operability study (HAZOP)', 'risk assessment', 'environmental engineering',
  'wastewater treatment', 'air pollution control', 'hazardous waste management', 'green chemistry',
  'sustainable processes', 'process intensification', 'biochemical engineering', 'bioprocess engineering',
  'bioreactor design', 'fermentation technology', 'enzyme kinetics', 'industrial microbiology',
  'petrochemical processes', 'polymer technology', 'nanotechnology', 'corrosion engineering',
  'materials of construction', 'catalysis', 'homogeneous catalysis', 'heterogeneous catalysis',
  'process economics', 'cost estimation', 'project engineering', 'quality control', 'six sigma',
  'lean manufacturing', 'GMP (Good Manufacturing Practice)', 'SCADA systems', 'DCS systems',
  'process instrumentation', 'control valves', 'PLC basics', 'technical documentation',
  'engineering ethics', 'intellectual property rights', 'patent law', 'chemical safety',
  'chemical handling', 'chemical storage', 'chemical transportation', 'chemical waste management',
  'chemical regulations', 'chemical process safety', 'chemical process design', 'chemical process optimization',
  'chemical process control', 'chemical process simulation', 'chemical process modeling',
  'chemical process analysis', 'chemical process troubleshooting', 'chemical process improvement','structural analysis', 'structural design', 'reinforced concrete design', 'steel structure design',
  'geotechnical engineering', 'soil mechanics', 'foundation engineering', 'transportation engineering',
  'highway engineering', 'traffic engineering', 'surveying', 'gps surveying', 'total station',
  'remote sensing', 'gis', 'building materials', 'construction technology', 'building construction',
  'estimation and costing', 'quantity surveying', 'autocad', 'staad pro', 'etabs', 'sap2000',
  'revit', 'bim (building information modeling)', 'primavera', 'ms project', 'project management',
  'site engineering', 'construction planning', 'concrete technology', 'earthquake engineering',
  'hydrology', 'irrigation engineering', 'environmental engineering', 'water supply systems',
  'wastewater treatment', 'solid waste management', 'air pollution control', 'fluid mechanics',
  'hydraulics', 'open channel flow', 'structural dynamics', 'bridge engineering', 'tunnel engineering',
  'railway engineering', 'harbor engineering', 'airport engineering', 'foundation design', 'pile foundations',
  'retaining walls', 'pavement design', 'pavement materials', 'bituminous materials', 'cement concrete roads',
  'construction safety', 'green building concepts', 'sustainable construction', 'construction materials testing',
  'quality control', 'non-destructive testing (NDT)', 'geosynthetics', 'plaxis', 'civil 3d',
  'lab testing', 'building codes', 'IS codes', 'ACI codes', 'structural health monitoring',
  'bar bending schedule (BBS)', 'construction equipment', 'formwork design', 'prestressed concrete',
  'composite structures', 'steel-concrete composite structures', 'earth retaining structures', 'physical metallurgy', 'mechanical metallurgy', 'extractive metallurgy', 'process metallurgy',
  'materials characterization', 'materials selection', 'phase diagrams', 'iron-carbon diagram',
  'heat treatment', 'annealing', 'quenching', 'tempering', 'normalizing', 'precipitation hardening',
  'crystal structure', 'crystallography', 'grain boundaries', 'dislocations', 'solidification',
  'alloy design', 'ferrous alloys', 'non-ferrous alloys', 'composite materials', 'ceramics',
  'polymers', 'smart materials', 'nanomaterials', 'nanotechnology', 'powder metallurgy',
  'corrosion', 'corrosion protection', 'electrochemistry', 'material failure analysis',
  'fracture mechanics', 'fatigue testing', 'creep testing', 'tensile testing', 'hardness testing',
  'impact testing', 'wear testing', 'x-ray diffraction (XRD)', 'scanning electron microscopy (SEM)',
  'transmission electron microscopy (TEM)', 'energy-dispersive X-ray spectroscopy (EDX)',
  'thermal analysis', 'differential scanning calorimetry (DSC)', 'thermogravimetric analysis (TGA)',
  'optical microscopy', 'microstructure analysis', 'phase transformation', 'diffusion in solids',
  'materials testing standards', 'ISO standards', 'ASTM standards', 'failure prevention',
  'metal casting', 'welding metallurgy', 'weldability', 'solid-state welding', 'arc welding',
  'additive manufacturing', '3d printing (metal)', 'recycling of metals', 'foundry technology',
  'rolling', 'forging', 'extrusion', 'machining', 'metal forming', 'surface engineering',
  'thin film deposition', 'plasma processing', 'tribology', 'material simulation', 'ansys',
  'comsol', 'materials informatics', 'machine learning in materials science',
  'computational materials science', 'ab initio calculations', 'density functional theory (DFT)',
  'molecular dynamics', 'finite element analysis (FEA)', 'computational fluid dynamics (CFD)',
  'molecular biology', 'cell biology', 'genetics', 'microbiology', 'biochemistry', 'immunology',
  'protein engineering', 'genetic engineering', 'rna interference', 'crispr-cas9', 'gene cloning',
  'pcr (polymerase chain reaction)', 'rt-pcr', 'gel electrophoresis', 'western blotting', 'northern blotting',
  'southern blotting', 'spectrophotometry', 'chromatography', 'hplc', 'gc-ms', 'mass spectrometry',
  'dna sequencing', 'ngs (next generation sequencing)', 'sanger sequencing', 'genomics', 'proteomics',
  'metabolomics', 'bioinformatics', 'computational biology', 'molecular docking', 'drug discovery',
  'molecular modeling', 'enzyme technology', 'enzyme kinetics', 'bioprocess engineering', 'bioreactor design',
  'upstream processing', 'downstream processing', 'fermentation technology', 'industrial microbiology',
  'plant tissue culture', 'animal cell culture', 'stem cell technology', 'recombinant dna technology',
  'synthetic biology', 'nanobiotechnology', 'systems biology', 'environmental biotechnology',
  'agricultural biotechnology', 'medical biotechnology', 'pharmaceutical biotechnology', 'vaccine development',
  'cell signaling', 'metabolic engineering', 'protein purification', 'affinity chromatography',
  'elisa', 'flow cytometry', 'microscopy', 'fluorescence microscopy', 'confocal microscopy',
  'biosensors', 'biostatistics', 'clinical trials', 'gmp (good manufacturing practices)',
  'glp (good laboratory practices)', 'regulatory affairs', 'patent filing', 'technology transfer',
  'laboratory safety', 'data analysis (r/python)', 'scientific writing', 'project documentation',
  'research methodology', 'literature review', 'grant writing', 'intellectual property rights',
  'biotechnology regulations',  'biotechnology ethics', 'biotechnology entrepreneurship', 'biotechnology commercialization',
  'biotechnology startups', 'biotechnology funding', 'biotechnology patents', 'biotechnology policies',
  'biotechnology in agriculture', 'biotechnology in food', 'biotechnology in medicine',
  'biotechnology in environment', 'biotechnology in energy', 'biotechnology in industry',
  'biotechnology in research',  'biotechnology in education', 'biotechnology in society', 'biotechnology in economy',
  'data structures', 'algorithms', 'object oriented programming', 'computer networks', 'operating systems',
  'database management systems', 'sql', 'nosql', 'mysql', 'mongodb', 'postgresql', 'oracle', 'software engineering',
  'web development', 'html', 'css', 'javascript', 'react', 'node.js', 'express', 'angular', 'vue.js', 'django', 'flask',
  'java', 'python', 'c', 'c++', 'kotlin', 'swift', 'typescript', 'git', 'github', 'version control',
  'rest api', 'graphql', 'json', 'xml', 'linux', 'bash scripting', 'shell scripting',
  'devops', 'docker', 'kubernetes', 'jenkins', 'ci/cd', 'aws', 'azure', 'gcp',
  'machine learning', 'deep learning', 'nlp', 'opencv', 'pytorch', 'tensorflow', 'scikit-learn',
  'data analysis', 'data visualization', 'pandas', 'numpy', 'matplotlib', 'seaborn',
  'cybersecurity', 'cryptography', 'ethical hacking', 'cloud computing', 'system design', 'microservices',
  'software testing', 'unit testing', 'integration testing', 'agile methodology', 'scrum', 'firebase',
  'android development', 'ios development', 'mobile app development', 'compiler design',
  'theory of computation', 'artificial intelligence', 'computer architecture', 'parallel programming',
  'distributed systems', 'network security', 'information security', 'penetration testing', 'vulnerability assessment',
  'incident response', 'forensics', 'malware analysis', 'threat hunting', 'security operations center (SOC)',
  'security information and event management (SIEM)', 'firewalls', 'intrusion detection systems (IDS)',
  'intrusion prevention systems (IPS)', 'network segmentation', 'data loss prevention (DLP)', 'endpoint security',
  'application security', 'web application security', 'mobile application security', 'cloud security',
  'identity and access management (IAM)', 'public key infrastructure (PKI)', 'digital certificates',
  'secure socket layer (SSL)', 'transport layer security (TLS)', 'virtual private networks (VPN)',
  'secure file transfer', 'email security', 'spam filtering', 'phishing detection', 'social engineering',
  'security awareness training', 'business continuity planning', 'disaster recovery planning', 'risk management', 'compliance',
  'regulatory requirements', 'data protection', 'privacy laws', 'general data protection regulation (GDPR)',
  'health insurance portability and accountability act (HIPAA)', 'payment card industry data security standard (PCI DSS)',
  'federal information security management act (FISMA)', 'nist cybersecurity framework', 'iso 27001',
  'cobit', 'it governance', 'it service management (ITSM)', 'it asset management', 'change management',
  'incident management', 'problem management', 'service desk', 'help desk', 'customer support', 
  'digital electronics', 'analog electronics', 'signals and systems', 'communication systems', 'wireless communication',
  'digital signal processing', 'vhdl', 'verilog', 'system verilog', 'embedded systems', 'embedded c', 'microcontrollers',
  'arduino', 'raspberry pi', 'stm32', '8051', 'iot', 'uart', 'spi', 'i2c', 'serial communication',
  'rf communication', 'microwave engineering', 'antenna design', 'signal processing', 'image processing',
  'control systems', 'transmission lines', 'electromagnetic theory', 'semiconductors', 'vlsi design', 'asic design',
  'pcb design', 'proteus', 'ltspice', 'multisim', 'altium designer', 'cadence', 'fpga', 'cpld', 'hdl coding',
  'robotics', 'sensor interfacing', 'power electronics', 'switching devices', 'analog circuit design',
  'digital system design', 'communication protocols', 'modulation techniques', 'matlab', 'simulink', 'labview',
  'telecommunication systems', 'satellite communication', 'optical communication', 'fiber optics', 'wireless sensor networks',
  'networking', 'mobile communication', 'signal integrity', 'data converters', 'adc', 'dac', 'noise reduction',
  'electronic measurement and instrumentation', 'testing and debugging', 'spectrum analysis', 'hardware-software co-design',
  'system on chip (SoC)', 'embedded linux', 'real-time operating systems (RTOS)', 'bare metal programming',
  'bootloaders', 'firmware development', 'device drivers', 'protocol stacks', 'network on chip (NoC)',
  'high-level synthesis (HLS)', 'low-power design', 'thermal management', 'electromagnetic compatibility (EMC)',
  'electromagnetic interference (EMI)', 'signal processing algorithms', 'image processing algorithms',
  'audio processing', 'speech recognition', 'natural language processing (NLP)', 'computer vision',
  'augmented reality (AR)', 'virtual reality (VR)', 'machine learning', 'deep learning', 'reinforcement learning',
  'neural networks', 'convolutional neural networks (CNN)', 'recurrent neural networks (RNN)', 'long short-term memory (LSTM)',
  'generative adversarial networks (GAN)', 'transfer learning', 'feature extraction', 'data preprocessing',
  'model evaluation', 'hyperparameter tuning', 'cross-validation', 'overfitting', 'underfitting',
  'regularization', 'gradient descent', 'backpropagation', 'activation functions', 'loss functions',
  'optimization algorithms',  'support vector machines (SVM)', 'decision trees', 'random forests', 'k-nearest neighbors (KNN)',
  'naive bayes', 'clustering algorithms', 'k-means clustering', 'hierarchical clustering',
  'dbscan', 'dimensionality reduction', 'principal component analysis (PCA)', 't-distributed stochastic neighbor embedding (t-SNE)',
  'linear discriminant analysis (LDA)', 'feature selection', 'feature engineering', 'data augmentation',
  'data normalization', 'data standardization', 'data imputation', 'outlier detection', 'anomaly detection',
  'time series analysis', 'forecasting', 'seasonal decomposition', 'autoregressive integrated moving average (ARIMA)',
  'exponential smoothing', 'long short-term memory (LSTM) networks', 'recurrent neural networks (RNN)',
  'transformer models', 'attention mechanisms', 'self-attention', 'multi-head attention', 'natural language understanding (NLU)',
  'natural language generation (NLG)', 'text classification', 'sentiment analysis', 'named entity recognition (NER)',
  'part-of-speech tagging', 'text summarization', 'text generation', 'machine translation',
  'question answering', 'chatbots', 'dialog systems', 'speech synthesis', 'text-to-speech (TTS)',
  'speech recognition', 'circuit theory', 'network analysis', 'electrical machines', 'transformers', 'dc machines', 'ac machines',
  'induction motors', 'synchronous machines', 'power systems', 'power electronics', 'switchgear and protection',
  'control systems', 'signal processing', 'digital electronics', 'analog electronics', 'electromagnetics',
  'renewable energy systems', 'smart grid', 'hvac', 'hvdc', 'electric drives', 'motor control', 'pid control',
  'power system analysis', 'load flow analysis', 'fault analysis', 'relay coordination', 'protection systems',
  'energy auditing', 'electric circuits', 'power distribution', 'transmission systems', 'circuit breakers',
  'substation design', 'lighting design', 'electrical design', 'etap', 'pscad', 'matlab', 'simulink',
  'embedded systems', 'microcontrollers', 'arduino', 'raspberry pi', 'scada', 'plc programming',
  'industrial automation', 'instrumentation', 'sensors and actuators', 'power quality', 'harmonics',
  'electric vehicles', 'battery management systems', 'solar pv systems', 'wind energy systems', 'high voltage engineering',
  'machine protection', 'insulation coordination', 'testing and commissioning', 'electrical safety', 'earthing system design',
  'electric power utilization', 'electrical estimation', 'building electrification', 'project planning', 'maintenance engineering',
  'electrical codes and standards', 'iec standards', 'is standards', 'nec standards', 'nema standards',
  'electrical safety standards', 'electrical testing standards', 'electrical installation standards',
  'electrical equipment standards', 'electrical wiring standards', 'electrical design standards',
  'electrical maintenance standards', 'electrical inspection standards', 'electrical testing procedures','classical mechanics', 'quantum mechanics', 'thermodynamics', 'statistical mechanics', 'electromagnetism',
  'optics', 'wave optics', 'geometrical optics', 'nuclear physics', 'atomic physics', 'solid state physics',
  'relativity', 'special relativity', 'general relativity', 'particle physics', 'astrophysics', 'cosmology',
  'fluid dynamics', 'plasma physics', 'acoustics', 'crystallography', 'x-ray diffraction', 'semiconductors',
  'superconductivity', 'magnetism', 'electricity', 'electrodynamics', 'laser physics', 'nanophysics', 'biophysics',
  'quantum field theory', 'spintronics', 'materials science', 'nonlinear dynamics', 'chaos theory', 'vacuum technology',
  'radiation detection', 'spectroscopy', 'photoelectric effect', 'compton scattering', 'wave-particle duality',
  'uncertainty principle', 'de broglie waves', 'lattice vibrations', 'phonons', 'feynman diagrams',
  'experimental physics', 'computational physics', 'mathematical physics', 'simulation techniques',
  'finite element methods', 'monte carlo methods', 'instrumentation', 'data acquisition', 'interferometry',
  'fiber optics', 'holography', 'gravitational waves', 'detectors', 'vacuum pumps', 'high-energy physics',
  'physics lab skills', 'error analysis', 'scientific programming', 'python', 'matlab', 'labview', 'origin',
  'mathematical modeling', 'numerical methods', 'differential equations', 'linear algebra', 'complex analysis',
  'real analysis', 'abstract algebra', 'group theory', 'ring theory', 'field theory', 'topology', 'organic chemistry', 'inorganic chemistry', 'physical chemistry', 'analytical chemistry', 'environmental chemistry',
  'biochemistry', 'quantum chemistry', 'polymer chemistry', 'green chemistry', 'industrial chemistry',
  'coordination chemistry', 'surface chemistry', 'photochemistry', 'electrochemistry', 'spectroscopy',
  'chromatography', 'mass spectrometry', 'nmr spectroscopy', 'uv-vis spectroscopy', 'ir spectroscopy',
  'reaction mechanisms', 'chemical kinetics', 'thermodynamics', 'acid-base chemistry', 'redox reactions',
  'stoichiometry', 'molecular structure', 'chemical bonding', 'crystal field theory', 'molecular orbital theory',
  'solid state chemistry', 'chemical equilibrium', 'phase equilibrium', 'colloids', 'adsorption', 'catalysis',
  'nanochemistry', 'computational chemistry', 'molecular modeling', 'chemical synthesis', 'laboratory safety',
  'chemical instrumentation', 'titration techniques', 'chemical separation', 'chemical analysis', 'green synthesis',
  'pharmaceutical chemistry', 'medicinal chemistry', 'food chemistry', 'agricultural chemistry', 'petroleum chemistry',
  'fuel chemistry', 'corrosion', 'materials chemistry', 'xrd', 'sem', 'chemcad', 'chemdraw', 'aspen plus',
  'reaction engineering', 'molecular dynamics', 'toxicology', 'safety data sheets', 'chemoinformatics',
  'chemical databases', 'chemical literature', 'chemical patents', 'chemical regulations', 'chemical ethics',
  'chemical entrepreneurship', 'chemical startups', 'chemical funding', 'chemical commercialization',
  'chemical patents', 'chemical policies', 'chemical education', 'chemical research', 'chemical society',
  'chemical industry', 'chemical engineering', 'chemical process design', 'chemical process optimization',
  'chemical process control', 'chemical process simulation', 'chemical process modeling',
  'chemical process analysis', 'chemical process troubleshooting', 'chemical process improvement',
  'algebra', 'linear algebra', 'calculus', 'differential calculus', 'integral calculus', 'vector calculus',
  'multivariable calculus', 'probability', 'statistics', 'discrete mathematics', 'number theory',
  'real analysis', 'complex analysis', 'differential equations', 'partial differential equations',
  'numerical methods', 'graph theory', 'topology', 'abstract algebra', 'group theory', 'ring theory',
  'field theory', 'combinatorics', 'set theory', 'logic', 'boolean algebra', 'game theory',
  'matrix algebra', 'eigenvalues', 'eigenvectors', 'optimization', 'linear programming', 'dynamic programming',
  'stochastic processes', 'fourier series', 'fourier transform', 'laplace transform', 'z-transform',
  'mathematical modeling', 'mathematical induction', 'recurrence relations', 'error analysis',
  'fuzzy logic', 'functional analysis', 'vector spaces', 'modelling with differential equations',
  'control theory', 'measure theory', 'integration techniques', 'coordinate geometry', 'analytical geometry',
  'trigonometry', 'geometry', 'mathematics software', 'matlab', 'mathematica', 'r', 'python', 'maple',
  'symbolic computation', 'data analysis', 'statistical inference', 'machine learning math', 'probabilistic models',
  'markov chains', 'bayesian statistics', 'random variables', 'regression analysis', 'nonlinear equations',
  'optimization techniques', 'numerical integration', 'numerical differentiation', 'finite difference methods',
  'finite element methods', 'computational mathematics', 'mathematical physics', 'mathematical biology',
  'mathematical finance', 'mathematical economics', 'mathematical statistics', 'mathematical logic',
  'mathematical philosophy','strategic management', 'business analytics', 'financial accounting', 'managerial accounting', 'corporate finance',
  'marketing management', 'market research', 'digital marketing', 'branding', 'consumer behavior', 'sales strategy',
  'operations management', 'supply chain management', 'logistics', 'project management', 'risk management',
  'entrepreneurship', 'business development', 'competitive strategy', 'business communication', 'leadership',
  'team management', 'organizational behavior', 'human resource management', 'talent acquisition', 'performance appraisal',
  'negotiation', 'conflict resolution', 'change management', 'decision making', 'business law', 'economics', 'microeconomics',
  'macroeconomics', 'financial modeling', 'investment analysis', 'equity research', 'valuation', 'mergers and acquisitions',
  'corporate strategy', 'ethics in business', 'innovation management', 'customer relationship management (CRM)',
  'data-driven decision making', 'data visualization', 'excel', 'powerpoint', 'tableau', 'sql', 'erp', 'sap',
  'organizational development', 'lean management', 'six sigma', 'kaizen', 'balanced scorecard', 'benchmarking',
  'stakeholder management', 'design thinking', 'agile management', 'time management', 'communication skills',
  'emotional intelligence', 'presentation skills', 'cross-cultural management', 'business intelligence',
  'data mining', 'big data analytics', 'cloud computing', 'artificial intelligence in business',
  'critical thinking', 'logical reasoning', 'argumentation', 'ethical analysis', 'epistemology',
  'metaphysics', 'phenomenology', 'existentialism', 'aesthetics', 'political philosophy',
  'philosophy of mind', 'philosophy of language', 'philosophy of science', 'moral philosophy',
  'utilitarianism', 'deontology', 'virtue ethics', 'feminist philosophy', 'environmental ethics',
  'social contract theory', 'analytic philosophy', 'continental philosophy', 'structuralism',
  'post-structuralism', 'hermeneutics', 'dialectical reasoning', 'logic (symbolic and informal)',
  'deductive logic', 'inductive logic', 'paradoxes', 'thought experiments', 'philosophical writing',
  'argument mapping', 'socratic questioning', 'historical analysis', 'textual interpretation',
  'abstract reasoning', 'philosophy of religion', 'theology', 'determinism vs free will',
  'identity theory', 'ontology', 'realism vs anti-realism', 'nihilism', 'pragmatism',
  'language analysis', 'ethics in technology', 'bioethics', 'philosophical debate',
  'scholarly research', 'academic writing', 'peer critique', 'legal research', 'legal writing', 'contract law', 'constitutional law', 'criminal law',
  'civil law', 'tort law', 'property law', 'corporate law', 'international law',
  'intellectual property law', 'human rights law', 'environmental law', 'cyber law',
  'labour law', 'family law', 'administrative law', 'taxation law', 'legal drafting',
  'litigation', 'moot court skills', 'legal analysis', 'case law research', 'statutory interpretation',
  'advocacy', 'mediation', 'arbitration', 'negotiation', 'legal ethics', 'legal compliance',
  'due diligence', 'legal opinion writing', 'trial preparation', 'pleading and conveyancing',
  'legal procedure', 'evidence law', 'judicial process', 'contract drafting', 'legal documentation',
  'regulatory frameworks', 'compliance audit', 'legal advising', 'mergers and acquisitions law',
  'corporate governance', 'data protection law', 'GDPR', 'information technology law', 'consumer protection law',
  'public international law', 'private international law', 'anti-trust law', 'legal research tools (Manupatra, SCC)',
  'e-filing', 'legal project management', 'paralegal skills', 'courtroom procedure', 'oral advocacy',
  'professional conduct', 'legal software (CaseMine, LexisNexis)', 'intellectual reasoning', 'case brief preparation',
  'retail banking', 'investment banking', 'corporate banking', 'commercial banking', 'private banking',
  'financial analysis', 'credit analysis', 'loan processing', 'risk management', 'compliance',
  'regulatory reporting', 'know your customer (KYC)', 'anti-money laundering (AML)', 'basel norms',
  'customer relationship management (CRM)', 'relationship banking', 'trade finance', 'wealth management',
  'portfolio management', 'treasury operations', 'financial modeling', 'equity research', 'debt markets',
  'mergers and acquisitions', 'securities trading', 'derivatives', 'mutual funds', 'insurance products',
  'retail lending', 'home loans', 'personal loans', 'credit cards', 'account reconciliation',
  'core banking solutions (CBS)', 'banking software (Finacle, Flexcube)', 'financial statement analysis',
  'interest rate analysis', 'asset liability management (ALM)', 'capital adequacy ratio', 'net interest margin',
  'digital banking', 'UPI', 'NEFT/RTGS', 'mobile banking', 'internet banking', 'fintech integration',
  'cybersecurity in banking', 'blockchain in banking', 'data analysis', 'excel modeling', 'MS Excel',
  'financial regulations', 'SEBI regulations', 'RBI guidelines', 'banking operations', 'branch management',
  'ATM operations', 'cash management', 'cheque clearing', 'foreign exchange', 'SWIFT transfers',
  'customer service', 'sales of banking products', 'cross-selling', 'time management', 'team collaboration',
  'communication skills', 'analytical skills', 'problem solving', 'negotiation skills', 'presentation skills',
  'conflict resolution', 'leadership skills', 'interpersonal skills', 'customer service orientation','communication', 'teamwork', 'leadership', 'problem solving', 'critical thinking',
  'time management', 'adaptability', 'creativity', 'attention to detail', 'organization',
  'multitasking', 'collaboration', 'decision making', 'emotional intelligence', 'negotiation',
  'conflict resolution', 'interpersonal skills', 'public speaking', 'presentation skills',
  'project management', 'strategic thinking', 'goal setting', 'analytical thinking',
  'research skills', 'customer service', 'self-motivation', 'accountability',
  'data analysis', 'technical writing', 'report writing', 'productivity tools',
  'internet research', 'business etiquette', 'professionalism', 'initiative',
  'active listening', 'persuasion', 'resilience', 'work ethic', 'stress management',
  'learning agility', 'cultural awareness', 'networking', 'problem identification',
  'basic computer literacy', 'Microsoft Office', 'Google Workspace', 'presentation design',
  'fast learning', 'growth mindset', 'logical reasoning', 'collaborative mindset',
  'curiosity', 'customer orientation', 'innovation', 'digital literacy', 'social media skills',
  'problem solving', 'critical thinking', 'project management', 'technical writing', 'circuit design',
  'simulation', 'CAD', 'CAM', 'solidworks', 'autocad', 'ansys', 'matlab', 'simulink', '3d modeling',
  'finite element analysis (fea)', 'computational fluid dynamics (cfd)', 'mechanical design', 'machine design',
  'thermodynamics', 'fluid mechanics', 'heat transfer', 'mechanics of materials', 'dynamics', 'kinematics',
  'control systems', 'motor control', 'pid controller', 'embedded systems', 'microcontrollers', 'arduino',
  'raspberry pi', 'iot', 'sensors and actuators', 'robotics', 'mechatronics', 'vhdl', 'verilog', 'fpga',
  'digital logic design', 'analog circuit design', 'pcb design', 'signal processing', 'image processing',
  'electromagnetics', 'power electronics', 'power systems', 'hvac', 'smart grid', 'transformers', 'circuit theory',
  'high voltage engineering', 'electrical machines', 'energy systems', 'safety engineering', 'renewable energy',
  'solar energy', 'wind energy', 'biomass energy', 'battery systems', 'fuel cells', 'automation', 'plc', 'scada',
  'instrumentation', 'industrial control', 'industrial design', 'material science', 'metallurgy', 'corrosion engineering',
  'fracture mechanics', 'composite materials', 'nanomaterials', 'semiconductor devices', 'surface engineering',
  'quality control', 'quality assurance', 'six sigma', 'lean manufacturing', 'kaizen', 'root cause analysis',
  'total productive maintenance', 'maintenance engineering', 'plant engineering', 'supply chain engineering',
  'chemical process design', 'reaction engineering', 'mass transfer', 'heat exchangers', 'fluidized bed reactors',
  'pumps and valves', 'process modeling', 'aspen plus', 'aspen hysys', 'chemcad', 'comsol', 'p&id', 'pfd',
  'environmental engineering', 'wastewater treatment', 'air pollution control', 'hazardous waste management',
  'civil engineering', 'structural analysis', 'concrete structures', 'steel structures', 'surveying', 'geotechnical engineering',
  'transportation engineering', 'soil mechanics', 'foundation engineering', 'construction planning', 'etabs',
  'staad pro', 'primavera', 'ms project', 'bim', 'building codes', 'traffic engineering', 'hydraulics', 'water resources',
  'computer programming', 'python', 'c++', 'java', 'html', 'css', 'javascript', 'sql', 'data structures', 'algorithms',
  'machine learning', 'deep learning', 'ai', 'nlp', 'opencv', 'tensorflow', 'pytorch', 'data visualization',
  'git', 'github', 'linux', 'bash', 'docker', 'kubernetes', 'devops', 'cloud computing', 'aws', 'azure', 'gcp',
  'software testing', 'unit testing', 'ci/cd', 'version control', 'object oriented programming (oop)',
  'system design', 'networking', 'cybersecurity', 'communication systems', 'vlsi', 'asic', 'embedded c',
  'robot operating system (ros)', 'gazebo', 'rviz', 'path planning', 'slam', 'lidar', 'urdf', 'xacro',
  'bioinformatics tools', 'molecular modeling', 'biomechanics', 'prosthetic design', 'medical imaging',
  'pharmaceutical engineering', 'bioprocess engineering', 'fermentation technology', 'dna sequencing',
  'protein purification', 'materials characterization', 'xrd', 'sem', 'tem', 'tensile testing', 'thermal analysis',
  'tribology', 'electrochemistry', 'nanoengineering', 'wireless communication', 'rf engineering', 'microwave engineering',
  'telecommunications', 'signal integrity', 'hvdc', 'load flow analysis', 'power system protection', 'etap', 'pscad',
  'mechanical vibrations', 'camshaft design', 'tolerance analysis', 'gear design', 'cam design', 'bearing selection',
  'shaft design', 'welding technology', 'casting processes', 'machining processes', '3d printing', 'cnc machining',
  'manufacturing systems', 'material removal processes', 'industrial safety', 'ergonomics', 'engineering ethics',
  'technical documentation', 'presentation skills', 'data analysis', 'statistical analysis', 'project budgeting',
  'cost estimation', 'procurement', 'vendor management', 'team collaboration', 'agile methodology', 'scrum',
  'microsoft office', 'ms word', 'ms excel', 'ms powerpoint', 'ms outlook', 'ms access',
  'ms project', 'ms visio', 'ms teams', 'onenote', 'sharepoint', 'power bi',
  'power apps', 'power automate', 'azure', 'azure devops', 'azure active directory',
  'microsoft dynamics 365', 'microsoft sql server', 'visual studio', 'visual studio code',
  'onenote', 'onenote class notebook', 'onenote staff notebook', 'microsoft forms',
  'sway', 'whiteboard', 'bookings', 'microsoft stream', 'windows os', 'windows server',
  'microsoft defender', 'intune', 'group policy management', 'exchange online',
  'onenote education tools', 'onedrive', 'excel macros', 'excel vba', 'conditional formatting',
  'pivot tables', 'excel dashboards', 'vlookup', 'power query', 'power pivot',
  'ms outlook automation', 'outlook calendar', 'word mail merge', 'powerpoint animations',
  'powerpoint transitions','canava', 'photoshop', 'illustrator', 'indesign', 'lightroom', 'figma',
  'generative ai', 'chatgpt', 'openai api', 'prompt engineering', 'langchain',
  'llm fine-tuning', 'text generation', 'image generation', 'dall·e', 'midjourney',
  'stable diffusion', 'audio generation', 'music generation', 'voice cloning',
  'video generation', 'deepfake technology', 'transformer models', 'gpt models',
  'bloom', 'llama', 'claude', 'bert', 'diffusion models', 'autoencoders', 'vae',
  'gan', 'text-to-image', 'text-to-speech', 'speech-to-text', 'multimodal ai',
  'open source llms', 'retrieval-augmented generation (rag)', 'semantic search',
  'vector databases', 'pinecone', 'chromadb', 'weaviate', 'faiss', 'embedding models',
  'sentence-transformers', 'langflow', 'llamaindex', 'openai function calling',
  'streamlit + openai', 'gradio apps', 'ai agents', 'babyagi', 'autogpt',
  'agentic workflows', 'prompt tuning', 'reinforcement learning with human feedback (rlhf)',
  'hallucination reduction', 'content moderation', 'ai ethics', 'bias detection',
  'openai playground', 'api rate limits', 'token management', 'cost estimation',
  'api key management', 'openai community', 'openai documentation', 'openai research',
  'lesson planning', 'curriculum design', 'instructional design', 'pedagogy', 'andragogy',
  'classroom management', 'online teaching', 'learning management systems (lms)',
  'moodle', 'blackboard', 'google classroom', 'canvas', 'assessment design',
  'rubric development', 'student engagement', 'flipped classroom', 'differentiated instruction',
  'blended learning', 'project-based learning', 'outcome-based education (obe)', 'accreditation process',
  'bloom’s taxonomy', 'research guidance', 'academic writing', 'publication writing',
  'thesis supervision', 'conference presentation', 'educational technology', 'smart board usage',
  'plagiarism checking tools', 'turnitin', 'mentoring', 'academic advising', 'coaching students',
  'question paper setting', 'exam invigilation', 'marks grading', 'faculty development programs',
  'collaborative teaching', 'experiential learning', 'education policy knowledge',
  'interdisciplinary teaching', 'student psychology', 'parent communication', 'soft skills training',
  'time management', 'public speaking', 'google workspace for education', 'ms office in education',
  'virtual labs', 'video lecture creation', 'canva for education', 'zoom teaching', 'microsoft teams',
  'emotional intelligence', 'empathy', 'inclusive education', 'research methodologies', 'statistics',
  'data analysis (spss/r)', 'publication ethics', 'fundraising for research', 'grant writing',
  'graphic design', 'branding', 'logo design', 'typography', 'color theory', 'layout design',
  'visual hierarchy', 'print design', 'poster design', 'flyer design', 'infographic design',
  'illustration', 'icon design', 'vector art', 'photo editing', 'mockup creation',
  'adobe photoshop', 'adobe illustrator', 'adobe indesign', 'canva', 'coreldraw',
  'figma', 'sketch', 'adobe xd', 'creativity', 'storyboarding', 'design thinking',
  'user interface design (ui)', 'responsive design', 'wireframing', 'prototyping',
  'branding guidelines', 'asset preparation', 'font pairing', 'digital illustration',
  '3d mockups', 'image tracing', 'composition', 'design systems', 'print-ready formats',
  'dpi optimization', 'batch editing', 'exporting formats', 'ad creatives','video editing', 'cutting and trimming', 'timeline editing', 'color grading',
  'video transitions', 'motion graphics', 'visual effects (vfx)', 'sound design',
  'audio synchronization', 'background score mixing', 'captioning', 'green screen editing',
  'multi-cam editing', 'video stabilization', 'storyboarding', 'video compression',
  'export settings', 'aspect ratios', 'frame rate management', 'slow motion',
  'fast cuts', 'jump cuts', 'b-roll management', 'animation', 'keyframing',
  '3d video effects', 'video templates', 'youtube editing', 'reels/tiktok editing',
  'adobe premiere pro', 'final cut pro', 'davinci resolve', 'after effects',
  'capcut', 'filmora', 'shotcut', 'openshot', 'iMovie', 'camtasia', 'audacity',
  'soundtrap', 'video storytelling', 'scriptwriting', 'voiceover recording',
  'media production', 'content creation', 'copywriting', 'scriptwriting', 'podcasting',
  'voiceover', 'radio editing', 'broadcasting', 'live streaming', 'camera handling',
  'dslr photography', 'cinematography', 'journalism', 'media ethics', 'interviewing',
  'news reporting', 'editorial writing', 'digital storytelling', 'media planning',
  'public relations (pr)', 'content marketing', 'social media content', 'influencer marketing',
  'brand storytelling', 'a/b testing creatives', 'studio lighting', 'microphone setup',
  'green screen setup', 'multimedia journalism', 'media analytics', 'seo for video',
  'video scripting', 'media publishing', 'wordpress content publishing', 'drone videography',
  'event coverage', 'short form content', 'long form content', 'reel production', 'media monetization',
  'youtube monetization', 'tiktok monetization', 'instagram monetization',
  'facebook monetization', 'content strategy', 'audience engagement', 'community building',
  'scikit-learn', 'tensorflow', 'keras', 'pytorch', 'xgboost', 'lightgbm', 'catboost',
  'mlops', 'sagemaker', 'optuna', 'sklearn pipeline', 'model evaluation', 'hyperparameter tuning',
  'model deployment', 'mlflow','tensorflow keras', 'cnn', 'rnn', 'lstm', 'gan', 'autoencoder', 'transformers', 'attention mechanism',
  'neural network design', 'custom loss functions', 'pytorch lightning','nltk', 'spaCy', 'transformers (Hugging Face)', 'gensim', 'textblob',
  'tokenization', 'stemming', 'lemmatization', 'named entity recognition', 'sentiment analysis',
  'bert', 'gpt', 'topic modeling', 'question answering', 'vector embeddings','pandas', 'numpy', 'matplotlib', 'seaborn', 'plotly', 'bokeh', 'altair', 'statsmodels',
  'data wrangling', 'data cleaning', 'data transformation', 'feature engineering', 'eda',
  'interactive dashboards', 'data visualization best practices', 'storytelling with data',
  'scipy', 'sympy', 'numba', 'cython', 'math', 'astropy', 'networkx', 'open3d', 'geopandas',
  'statistics', 'signal processing','flask', 'django', 'fastapi', 'jinja2', 'sqlalchemy', 'uvicorn', 'gunicorn',
  'wtforms', 'flask-login', 'middleware', 'restful apis', 'websocket support','sqlalchemy', 'pymongo', 'psycopg2', 'sqlite3', 'mysql-connector-python', 'redis-py', 'pyodbc',
  'data pipelines', 'etl', 'airflow', 'luigi', 'pandasql', 'dbapi','selenium', 'pyautogui', 'beautifulsoup', 'requests', 'scrapy', 'os', 'subprocess', 'shutil',
  'automation scripts', 'batch processing', 'web scraping', 'api integration', 'pytest', 'unittest','opencv', 'mediapipe', 'imageio', 'scikit-image', 'face_recognition', 'pillow', 'dlib',
  'image preprocessing', 'object detection', 'image segmentation', 'facial recognition',
  'pytest', 'unittest', 'nose2', 'doctest', 'mock', 'tox', 'code coverage', 'debugging', 'profiling',
  'performance testing', 'load testing', 'stress testing', 'unit tests', 'integration tests',
  'financial accounting', 'taxation', 'auditing', 'cost accounting', 'budgeting',
  'gst compliance', 'income tax filing', 'corporate law', 'accounting standards',
  'ifrs', 'indas', 'tally', 'quickbooks', 'sap fico', 'excel financial modeling',
  'financial analysis', 'internal audit', 'statutory audit', 'due diligence',
  'financial reporting', 'bank reconciliation', 'payroll management', 'ledger management',
  'investment analysis', 'company law compliance', 'cash flow analysis', 'inventory management',
  'compliance management', 'direct tax', 'indirect tax', 'transfer pricing', 'cost audit',
  'internal controls', 'business advisory', 'risk assessment', 'financial planning',
  'valuation', 'project finance', 'mergers and acquisitions', 'roc filings','clinical diagnosis', 'patient management', 'medical history taking', 'prescription writing',
  'emergency care', 'basic life support (bls)', 'advanced cardiac life support (acls)',
  'surgical assistance', 'radiology interpretation', 'pathology knowledge', 'ecg interpretation',
  'pediatrics', 'gynecology', 'internal medicine', 'general surgery', 'pharmacology',
  'anatomy', 'physiology', 'microbiology', 'public health', 'epidemiology', 'telemedicine',
  'hospital administration', 'medical ethics', 'infection control', 'evidence-based medicine',
  'patient counseling', 'electronic medical records (emr)', 'nursing coordination',
  'diagnostic testing', 'lab report interpretation', 'vaccination protocols', 'mental health assessment',
  'oncology basics', 'cardiology basics', 'neurology basics', 'dermatology basics', 'critical care',
  'clinical research', 'medical documentation', 'healthcare regulations', 'medical equipment usage',
  'medical coding', 'billing and coding', 'health insurance knowledge', 'patient safety',
  'technical analysis', 'fundamental analysis', 'chart patterns', 'candlestick patterns',
  'macd', 'bollinger bands', 'moving averages', 'relative strength index (rsi)', 'stochastic oscillator',
  'fibonacci retracement', 'pivot points', 'volume analysis', 'support and resistance', 'trendlines',
  'backtesting', 'trading psychology', 'risk management', 'position sizing', 'portfolio management',
  'asset allocation', 'diversification', 'currency trading (forex)', 'equity trading',
  'commodity trading', 'options trading', 'futures trading', 'derivatives trading', 'short selling',
  'market orders', 'limit orders', 'stop loss orders', 'trailing stop orders', 'high-frequency trading',
  'algorithmic trading', 'quantitative analysis', 'arbitrage', 'day trading', 'swing trading',
  'scalping', 'long-term investing', 'cryptocurrency trading', 'crypto technical analysis',
  'market sentiment analysis', 'economic indicators analysis', 'earnings reports analysis',
  'financial news monitoring', 'ETFs', 'REITs', 'margin trading', 'trading platforms (e.g., MetaTrader, ThinkOrSwim)',
  'trade execution', 'trade management', 'trade journaling', 'transaction cost analysis', 'portfolio optimization',
  'taxation on trading gains', 'investment strategies', 'high-low volume breakout', 'dark pools', 'block trading',
  'Indian Polity & Constitution', 'Indian History', 'Ancient History', 'Medieval History',
  'Modern History', 'Art and Culture', 'Indian Geography', 'World Geography', 'Economic Development',
  'Indian Economy', 'Budgeting Process', 'Banking System', 'Inflation & Deflation', 'Taxation System',
  'Environment & Ecology', 'Biodiversity', 'Climate Change', 'Sustainable Development', 'Social Issues',
  'Demographics', 'Urbanization', 'Poverty Alleviation', 'Healthcare in India', 'Education System',
  'Science & Technology', 'Space Technology', 'Biotechnology', 'Digital India Initiatives',
  'Internal Security', 'Terrorism & Countermeasures', 'Cybersecurity', 'Border Management',
  'Disaster Management', 'International Relations', 'India’s Foreign Policy', 'Global Organizations',
  'UN and its Agencies', 'IMF', 'WTO', 'World Bank', 'Current Affairs (National)', 
  'Current Affairs (International)', 'Ethics & Integrity', 'Moral Thinkers & Philosophers',
  'Civil Services Values', 'Administrative Ethics', 'Public/Civil Service Values', 
  'Accountability and Transparency', 'RTI Act', 'Citizen Charter', 'E-Governance',
  'Answer Writing Skills', 'Essay Writing', 'Time Management', 'Data Interpretation',
  'Flowchart and Diagram Skills', 'Critical Thinking', 'Problem Solving', 'Analytical Reasoning',
  'Interdisciplinary Thinking', 'Comparative Analysis', 'Quote & Report Usage', 'Map Marking',
  'Case Study Writing', 'Balanced Viewpoint Formation', 'Constitutional Articles Knowledge',
  'Landmark Judgments Recall', 'Legislative Process', 'Parliamentary Committees', 'Policy Making',
  'Governance Models', 'Public Administration Basics', 'Indian Society', 'Caste System',
  'Gender Equality Issues', 'Tribal Issues', 'Globalization Impact', 'Regionalism & Communalism',
  'Agriculture & Allied Sectors', 'Infrastructure Development', 'Energy Sector', 'Industrial Policies',
  'Schemes & Programs', 'Election Process', 'Model Code of Conduct', 'Political Theory Basics',
  'Freedom Struggle', 'Indian National Movement', 'Prelims MCQ Solving', 'Mains Structuring',
  'UPSC PYQ Analysis', 'Mock Test Participation', 'Self-Evaluation Techniques', 'Revision Strategies',
  'Note Making Skills', 'Optional Subject Expertise', 'GS-Optional Integration', 'Interview Preparation',
  'Body Language & Communication', 'Mock Interviews', 'DAF Analysis'
];

const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('resumeUpload');
const fileInfo = document.getElementById('fileInfo');
const fileName = fileInfo.querySelector('.file-name');
const fileSize = fileInfo.querySelector('.file-size');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorContainer = document.getElementById('errorContainer');
const resultsCard = document.getElementById('resultsCard');
const output = document.getElementById('output');

const userUUID = localStorage.getItem('userUUID');

uploadArea.addEventListener('click', () => fileInput.click());
uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = 'var(--primary)';
  uploadArea.style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
});
uploadArea.addEventListener('dragleave', () => {
  uploadArea.style.borderColor = 'var(--border)';
  uploadArea.style.backgroundColor = 'var(--primary-light)';
});
uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = 'var(--border)';
  uploadArea.style.backgroundColor = 'var(--primary-light)';
  if (e.dataTransfer.files.length) {
    fileInput.files = e.dataTransfer.files;
    handleFileUpload(fileInput.files[0]);
  }
});
fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    handleFileUpload(fileInput.files[0]);
  }
});

async function handleFileUpload(file) {
  errorContainer.style.display = 'none';
  resultsCard.style.display = 'none';
  output.textContent = 'Processing...';
  
  fileName.textContent = file.name;
  fileSize.textContent = `${(file.size / 1024).toFixed(2)} KB`;
  
  if (!file.type.includes('pdf')) {
    showError("Please upload a valid PDF file");
    return;
  }
  
  loadingIndicator.style.display = 'flex';
  
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str);
      fullText += strings.join(' ') + '\n';
    }
    
    if (!fullText.trim()) {
      throw new Error("PDF contains no selectable text (may be scanned)");
    }
    
    const parsedData = parseResumeData(fullText);
    displayResults(parsedData);
    
  } catch (error) {
    console.error("Error processing PDF:", error);
    showError(`Error: ${error.message}`);
    output.textContent = 'Upload a PDF resume to see parsed data';
  } finally {
    loadingIndicator.style.display = 'none';
  }
}

function parseResumeData(text) {
  const name = extractName(text);
  const email = extractEmail(text);
  const phone = extractPhone(text);
  const skills = extractSkills(text);
  const experience = extractExperience(text);
  const education = extractEducation(text);
  
  var resumeData = {
    name,
    email,
    phone,
    skills,
    experience: experience || 'Not found',
    education: education || 'Not found',
    rawTextLength: text.length
  };

  return resumeData;

}

function displayResults(data) {
  const formattedOutput = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Skills (${data.skills.length}):
${data.skills.map(skill => `  • ${skill}`).join('\n')}

Experience:
${data.experience}

Education:
${data.education}

Raw text length: ${data.rawTextLength} characters
  `;
  
  output.textContent = formattedOutput;
  resultsCard.style.display = 'block';

  fetch('https://abhyas-server.onrender.com/info/resume', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      resumeData: {
        userUUID,
        name: data.name,
        email: data.email,
        phoneno: data.phone, 
        skills: data.skills.join(', '), 
        experience: data.experience,
        education: data.education
      }
    })
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => console.log('Resume saved:', data))
  .catch(error => console.error('Error saving resume:', error));
}

function showError(message) {
  errorContainer.textContent = message;
  errorContainer.style.display = 'block';
}

function extractName(text) {
  const lines = text.split('\n').filter(line => line.trim().length > 0);
  for (let line of lines.slice(0, 5)) {
    const possibleName = line.trim().split(/\s+/).slice(0, 3).join(' ');
    if (possibleName.split(' ').length >= 2 && /^[A-Z][a-z]/.test(possibleName)) {
      return possibleName;
    }
  }
  return 'Not found';
}

function extractEmail(text) {
  const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
  const match = text.match(emailRegex);
  return match ? match[0] : 'Not found';
}

function extractPhone(text) {
  const phoneRegex = /(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}/g;
  const matches = text.match(phoneRegex);
  return matches && matches.length > 0 ? matches[0] : 'Not found';
}

function extractSkills(text) {
  const lowerText = text.toLowerCase();
  return [...new Set(SKILLS_DB.filter(skill => lowerText.includes(skill.toLowerCase())))];
}

function extractExperience(text) {
  const expKeywords = ['experience', 'work history', 'employment'];
  for (const keyword of expKeywords) {
    const idx = text.toLowerCase().indexOf(keyword);
    if (idx !== -1) {
      return text.substring(idx, idx + 300).replace(/\s+/g, ' ').trim() + '...';
    }
  }
  return null;
}

function extractEducation(text) {
  const eduKeywords = ['education', 'academic background', 'qualifications'];
  for (const keyword of eduKeywords) {
    const idx = text.toLowerCase().indexOf(keyword);
    if (idx !== -1) {
      return text.substring(idx, idx + 200).replace(/\s+/g, ' ').trim() + '...';
    }
  }
  return null;
}

function startInterview() {
  window.location.href = 'interview.html';
}
