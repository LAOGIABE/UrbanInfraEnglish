// Vocabulary and sentences database extracted directly from "KD Textbook 2026.pdf"
// All vocabulary terms map to their correct Vietnamese technical/civil engineering translations.

const chaptersData = [
  {
    id: 1,
    title: "Understanding Urban Infrastructure Systems and Sustainable Cities",
    vocabulary: [
      { word: "land use", meanings: ["quy hoạch sử dụng đất", "sử dụng đất"], primaryMeaning: "sử dụng đất" },
      { word: "circulation", meanings: ["sự lưu thông", "lưu thông", "tuần hoàn", "giao thông"], primaryMeaning: "sự lưu thông / giao thông" },
      { word: "boulevard", meanings: ["đại lộ", "đại lộ lớn", "đường lớn"], primaryMeaning: "đại lộ" },
      { word: "mass transit", meanings: ["vận tải hành khách công cộng khối lượng lớn", "vận tải công cộng khối lượng lớn", "giao thông công cộng khối lượng lớn"], primaryMeaning: "vận tải công cộng khối lượng lớn" },
      { word: "Smart Infrastructure", meanings: ["cơ sở hạ tầng thông minh", "hạ tầng thông minh"], primaryMeaning: "cơ sở hạ tầng thông minh" },
      { word: "Transit-Oriented Development (TOD)", meanings: ["phát triển đô thị định hướng giao thông công cộng", "phát triển định hướng giao thông", "tod"], primaryMeaning: "phát triển đô thị định hướng giao thông công cộng (TOD)" },
      { word: "Smart Grids", meanings: ["lưới điện thông minh"], primaryMeaning: "lưới điện thông minh" },
      { word: "IoT sensors", meanings: ["cảm biến iot", "các cảm biến iot"], primaryMeaning: "cảm biến IoT" },
      { word: "Sponge City", meanings: ["đô thị bọt biển", "thành phố bọt biển"], primaryMeaning: "đô thị bọt biển" },
      { word: "sewage system", meanings: ["hệ thống nước thải", "hệ thống thoát nước thải"], primaryMeaning: "hệ thống thoát nước thải" },
      { word: "parks and green spaces", meanings: ["công viên và không gian xanh"], primaryMeaning: "công viên và không gian xanh" },
      { word: "hospitals", meanings: ["bệnh viện"], primaryMeaning: "bệnh viện" },
      { word: "schools", meanings: ["trường học"], primaryMeaning: "trường học" },
      { word: "police stations", meanings: ["đồn cảnh sát", "trạm cảnh sát"], primaryMeaning: "đồn cảnh sát" },
      { word: "fire stations", meanings: ["trạm cứu hỏa", "trạm cứu hoả"], primaryMeaning: "trạm cứu hỏa" },
      { word: "airports", meanings: ["sân bay", "phi trường"], primaryMeaning: "sân bay" },
      { word: "railway stations", meanings: ["nhà ga đường sắt", "ga tàu hỏa", "ga tàu"], primaryMeaning: "nhà ga đường sắt" },
      { word: "ports/harbors", meanings: ["cảng", "bến cảng", "cảng biển"], primaryMeaning: "cảng / bến cảng" },
      { word: "parking facilities", meanings: ["bãi đỗ xe", "tiện ích đỗ xe", "nhà để xe"], primaryMeaning: "bãi đỗ xe / tiện ích đỗ xe" },
      { word: "roads/highways", meanings: ["đường bộ", "đường cao tốc", "đường lộ"], primaryMeaning: "đường bộ / đường cao tốc" },
      { word: "sidewalks", meanings: ["vỉa hè", "đường đi bộ sát lề đường"], primaryMeaning: "vỉa hè" },
      { word: "bicycle lanes", meanings: ["làn đường xe đạp", "đường dành cho xe đạp"], primaryMeaning: "làn đường xe đạp" },
      { word: "street lights", meanings: ["đèn đường", "hệ thống chiếu sáng đường phố"], primaryMeaning: "đèn đường" },
      { word: "traffic signals", meanings: ["tín hiệu giao thông", "đèn giao thông", "đèn tín hiệu giao thông"], primaryMeaning: "tín hiệu giao thông" },
      { word: "water supply system", meanings: ["hệ thống cấp nước", "hệ thống cung cấp nước"], primaryMeaning: "hệ thống cấp nước" },
      { word: "drainage system", meanings: ["hệ thống thoát nước", "hệ thống tiêu nước"], primaryMeaning: "hệ thống thoát nước" },
      { word: "electric grid", meanings: ["lưới điện", "mạng lưới điện"], primaryMeaning: "lưới điện" },
      { word: "telecommunication", meanings: ["viễn thông", "mạng viễn thông"], primaryMeaning: "viễn thông" },
      { word: "waste management", meanings: ["quản lý chất thải", "quản lý rác thải"], primaryMeaning: "quản lý chất thải" },
      { word: "bridges", meanings: ["cầu", "công trình cầu"], primaryMeaning: "cầu" },
      { word: "tunnels", meanings: ["đường hầm"], primaryMeaning: "đường hầm" },
      { word: "public transport", meanings: ["phương tiện giao thông công cộng", "giao thông công cộng"], primaryMeaning: "giao thông công cộng" }
    ],
    sentences: [
      {
        english: "One important planning approach that connects transportation and land use is Transit-Oriented Development (TOD).",
        vietnamese: "Một cách tiếp cận quy hoạch quan trọng kết nối giao thông và sử dụng đất là Phát triển Đô thị định hướng giao thông công cộng (TOD)."
      },
      {
        english: "TOD encourages higher-density and mixed-use development around public transportation stations so that residents can access services and activities within shorter distances.",
        vietnamese: "TOD khuyến khích phát triển với mật độ cao hơn và sử dụng hỗn hợp đất xung quanh các nhà ga giao thông công cộng để cư dân có thể tiếp cận các dịch vụ và hoạt động trong khoảng cách ngắn hơn."
      },
      {
        english: "As urban populations increase, cities face growing pressure to improve energy efficiency whilereducing environmental impacts.",
        vietnamese: "Khi dân số đô thị tăng lên, các thành phố đối mặt với áp lực ngày càng tăng trong việc cải thiện hiệu quả năng lượng đồng thời giảm thiểu các tác động môi trường."
      },
      {
        english: "Many cities now integrate sensors, monitoring systems, digital networks, and data management tools into infrastructure operations.",
        vietnamese: "Nhiều thành phố hiện nay tích hợp các cảm biến, hệ thống giám sát, mạng kỹ thuật số và các công cụ quản lý dữ liệu vào các hoạt động vận hành cơ sở hạ tầng."
      },
      {
        english: "Understanding these relationships allows planners, engineers, architects, and designers to develop more integrated approaches to urban development.",
        vietnamese: "Việc hiểu rõ các mối quan hệ này cho phép các nhà quy hoạch, kỹ sư, kiến trúc sư và nhà thiết kế phát triển các cách tiếp cận tích hợp hơn cho sự phát triển đô thị."
      }
    ]
  },
  {
    id: 2,
    title: "Urban Transportation and Land Use Planning",
    vocabulary: [
      { word: "carriageway road", meanings: ["lòng đường", "đường dành cho xe chạy", "phần đường xe chạy"], primaryMeaning: "lòng đường / đường dành cho xe chạy" },
      { word: "franchised bus", meanings: ["xe buýt nhượng quyền", "xe buýt tuyến nhượng quyền"], primaryMeaning: "xe buýt nhượng quyền" },
      { word: "stacking area", meanings: ["khu vực xếp xe", "bãi đỗ xếp xe", "vùng xếp hàng xe"], primaryMeaning: "khu vực xếp xe" },
      { word: "off-street lay-by", meanings: ["vịnh đỗ xe ngoài đường", "làn đỗ xe phụ ngoài đường", "điểm dừng xe tạm thời ngoài đường"], primaryMeaning: "vịnh đỗ xe ngoài đường" },
      { word: "kiss-and-ride", meanings: ["điểm dừng đón trả khách nhanh", "bãi đón trả khách nhanh", "kiss and ride"], primaryMeaning: "điểm dừng đón trả khách nhanh (Kiss-and-ride)" },
      { word: "park-and-ride facilities", meanings: ["bãi đỗ xe trung chuyển", "bãi đỗ xe kết hợp trung chuyển", "park and ride"], primaryMeaning: "bãi đỗ xe trung chuyển (Park-and-ride)" },
      { word: "kerbside", meanings: ["lề đường", "mép đường", "mép vỉa hè"], primaryMeaning: "lề đường / mép đường" },
      { word: "single or dual-bay taxi stand", meanings: ["điểm đỗ taxi đơn hoặc kép", "điểm đỗ taxi đơn/kép", "bến taxi một hoặc hai vị trí"], primaryMeaning: "điểm đỗ taxi đơn hoặc kép" },
      { word: "multi-modal interchange", meanings: ["điểm trung chuyển đa phương thức", "ga trung chuyển đa phương thức", "nút giao thông đa phương thức"], primaryMeaning: "điểm trung chuyển đa phương thức" },
      { word: "coach picking-up/setting-down bay", meanings: ["làn đón trả khách xe khách", "điểm đón trả khách xe khách liên tỉnh", "vịnh đón trả xe khách"], primaryMeaning: "làn đón/trả khách cho xe khách" },
      { word: "Non-Motorized Transport (NMT)", meanings: ["giao thông phi cơ giới", "phương tiện phi cơ giới", "nmt"], primaryMeaning: "giao thông phi cơ giới (NMT)" },
      { word: "Urbanization", meanings: ["đô thị hóa", "đô thị hoá"], primaryMeaning: "đô thị hóa" },
      { word: "Zero-emission", meanings: ["phát thải bằng không", "phát thải ròng bằng không", "không phát thải"], primaryMeaning: "phát thải bằng không" },
      { word: "Carbon footprint", meanings: ["dấu chân carbon", "dấu chân các-bon"], primaryMeaning: "dấu chân carbon" },
      { word: "Sedentary lifestyle", meanings: ["lối sống ít vận động", "phong cách sống thụ động"], primaryMeaning: "lối sống ít vận động" },
      { word: "Traffic congestion", meanings: ["ùn tắc giao thông", "tắc nghẽn giao thông", "kẹt xe"], primaryMeaning: "ùn tắc giao thông" },
      { word: "Last-mile problem", meanings: ["vấn đề chặng cuối", "vấn đề dặm cuối"], primaryMeaning: "vấn đề chặng cuối" },
      { word: "Car-centric planning", meanings: ["quy hoạch lấy ô tô làm trung tâm", "quy hoạch tập trung vào ô tô"], primaryMeaning: "quy hoạch lấy ô tô làm trung tâm" },
      { word: "Active mobility", meanings: ["di chuyển chủ động", "di chuyển tích cực", "vận động chủ động"], primaryMeaning: "di chuyển tích cực / di chuyển chủ động" },
      { word: "Public transit hubs", meanings: ["đầu mối giao thông công cộng", "trung tâm giao thông công cộng", "trung tâm trung chuyển"], primaryMeaning: "đầu mối giao thông công cộng" }
    ],
    sentences: [
      {
        english: "The street as an instrument for vehicular circulation has a long history, with horse-drawn cabs and private coaches becoming a common feature of urban life in capital cities.",
        vietnamese: "Đường phố như một công cụ cho sự lưu thông của xe cộ có lịch sử lâu đời, với các xe ngựa chở khách và xe kéo cá nhân trở thành đặc điểm phổ biến của đời sống đô thị tại các thành phố thủ đô."
      },
      {
        english: "In general, internal transport facilities such as roads, railways, terminals, depots, petrol filling stations etc. have the potential to cause damage to the environment.",
        vietnamese: "Nói chung, các công trình giao thông nội bộ như đường bộ, đường sắt, nhà ga, kho bãi, trạm xăng, v.v. đều có khả năng gây thiệt hại cho môi trường."
      },
      {
        english: "The transport and environment interaction forms one of the considerations in the evaluation of transport projects at the planning stage.",
        vietnamese: "Sự tương tác giữa giao thông và môi trường là một trong những yếu tố cần được xem xét khi đánh giá các dự án giao thông ở giai đoạn quy hoạch."
      },
      {
        english: "Non-Motorized Transport (NMT) includes walking, cycling, and other human-powered modes, which play a crucial role in reducing carbon emissions and promoting active mobility.",
        vietnamese: "Giao thông phi cơ giới (NMT) bao gồm đi bộ, đi xe đạp và các hình thức di chuyển bằng sức người khác, đóng vai trò quan trọng trong việc giảm lượng khí thải carbon và thúc đẩy di chuyển chủ động."
      }
    ]
  },
  {
    id: 3,
    title: "Urban Energy Infrastructure Systems",
    vocabulary: [
      { word: "Generation", meanings: ["sự phát điện", "phát điện", "sự tạo ra"], primaryMeaning: "phát điện / sự phát điện" },
      { word: "Transmission", meanings: ["sự truyền tải điện", "truyền tải điện", "sự truyền dẫn"], primaryMeaning: "truyền tải điện / sự truyền dẫn" },
      { word: "Distribution", meanings: ["sự phân phối điện", "phân phối điện", "sự phân phối"], primaryMeaning: "phân phối điện" },
      { word: "Step-up/Step-down Transformer", meanings: ["máy biến áp tăng áp và hạ áp", "máy biến thế tăng áp/hạ áp", "máy biến áp tăng/hạ áp"], primaryMeaning: "máy biến áp tăng áp / hạ áp" },
      { word: "Kinetic energy", meanings: ["động năng"], primaryMeaning: "động năng" },
      { word: "IoT", meanings: ["internet vạn vật", "iot", "internet kết nối vạn vật"], primaryMeaning: "Internet vạn vật (IoT)" },
      { word: "sensors", meanings: ["cảm biến", "thiết bị cảm biến"], primaryMeaning: "cảm biến" },
      { word: "communication technologies", meanings: ["công nghệ truyền thông", "công nghệ thông tin liên lạc"], primaryMeaning: "công nghệ truyền thông" },
      { word: "smart grids", meanings: ["lưới điện thông minh"], primaryMeaning: "lưới điện thông minh" },
      { word: "smart meters", meanings: ["công tơ điện thông minh", "đồng hồ đo thông minh", "công tơ thông minh"], primaryMeaning: "công tơ điện thông minh / đồng hồ thông minh" },
      { word: "connected devices", meanings: ["các thiết bị kết nối", "thiết bị kết nối"], primaryMeaning: "thiết bị kết nối" },
      { word: "data privacy", meanings: ["quyền riêng tư dữ liệu", "bảo mật dữ liệu"], primaryMeaning: "quyền riêng tư dữ liệu" },
      { word: "cybersecurity", meanings: ["an ninh mạng", "an toàn thông tin"], primaryMeaning: "an ninh mạng" },
      { word: "robust digital infrastructure", meanings: ["cơ sở hạ tầng kỹ thuật số vững chắc", "hạ tầng số mạnh mẽ", "hạ tầng số vững chắc"], primaryMeaning: "cơ sở hạ tầng kỹ thuật số vững chắc" },
      { word: "heating", meanings: ["sưởi ấm", "hệ thống sưởi", "gia nhiệt"], primaryMeaning: "sưởi ấm / hệ thống sưởi" },
      { word: "fuel cells and hydrogen", meanings: ["pin nhiên liệu và hydro", "pin nhiên liệu và hy-đrô"], primaryMeaning: "pin nhiên liệu và hydro" },
      { word: "nuclear power", meanings: ["năng lượng hạt nhân", "điện hạt nhân"], primaryMeaning: "năng lượng hạt nhân" },
      { word: "solar energy", meanings: ["năng lượng mặt trời", "điện mặt trời"], primaryMeaning: "năng lượng mặt trời" },
      { word: "hydro-power", meanings: ["thủy điện", "năng lượng nước"], primaryMeaning: "thủy điện" },
      { word: "geothermal energy", meanings: ["năng lượng địa nhiệt", "địa nhiệt"], primaryMeaning: "địa nhiệt / năng lượng địa nhiệt" },
      { word: "biomass", meanings: ["sinh khối"], primaryMeaning: "sinh khối" },
      { word: "electricity", meanings: ["điện", "điện năng"], primaryMeaning: "điện / điện năng" },
      { word: "coal", meanings: ["than đá", "than"], primaryMeaning: "than đá" },
      { word: "natural gas", meanings: ["khí thiên nhiên", "khí tự nhiên"], primaryMeaning: "khí thiên nhiên" },
      { word: "oil (petroleum)", meanings: ["dầu mỏ", "dầu khí", "dầu thô", "dầu mỏ (dầu khí)"], primaryMeaning: "dầu mỏ / dầu khí" },
      { word: "wind energy", meanings: ["năng lượng gió", "điện gió"], primaryMeaning: "năng lượng gió" }
    ],
    sentences: [
      {
        english: "Residential buildings, commercial centers, hospitals, schools, public transportation systems, communication networks, traffic signals, and street lighting all consume energy.",
        vietnamese: "Các tòa nhà dân cư, trung tâm thương mại, bệnh viện, trường học, hệ thống giao thông công cộng, mạng lưới thông tin liên lạc, tín hiệu giao thông và hệ thống chiếu sáng đường phố đều tiêu thụ năng lượng."
      },
      {
        english: "Renewable energy sources like solar energy, wind energy, and geothermal energy play a key role in reducing carbon footprints and ensuring sustainable energy systems for smart cities.",
        vietnamese: "Các nguồn năng lượng tái tạo như năng lượng mặt trời, năng lượng gió và địa nhiệt đóng vai trò then chốt trong việc giảm dấu chân carbon và đảm bảo hệ thống năng lượng bền vững cho các đô thị thông minh."
      },
      {
        english: "Smart grids use digital communication technologies to detect and react to local changes in usage, improving efficiency and reliability of electricity distribution.",
        vietnamese: "Lưới điện thông minh sử dụng các công nghệ truyền thông kỹ thuật số để phát hiện và phản ứng với các thay đổi cục bộ trong sử dụng, giúp cải thiện hiệu quả và độ tin cậy của việc phân phối điện."
      }
    ]
  },
  {
    id: 4,
    title: "Urban Water Supply Systems",
    vocabulary: [
      { word: "aquifer", meanings: ["tầng ngậm nước", "lớp ngậm nước"], primaryMeaning: "tầng ngậm nước" },
      { word: "portable water", meanings: ["nước uống được", "nước sinh hoạt", "nước sạch"], primaryMeaning: "nước uống được / nước sinh hoạt" },
      { word: "surface or subsurface resources", meanings: ["nguồn nước bề mặt hoặc nguồn nước ngầm", "nguồn nước mặt hoặc nước dưới đất", "nguồn nước mặt hoặc nguồn nước ngầm"], primaryMeaning: "nguồn nước bề mặt hoặc nguồn nước ngầm" },
      { word: "Transmission Mains", meanings: ["đường ống truyền dẫn chính", "đường ống cấp nước chính", "tuyến ống chính truyền tải"], primaryMeaning: "đường ống truyền dẫn chính" },
      { word: "Distribution Mains", meanings: ["đường ống phân phối chính", "đường ống phân phối"], primaryMeaning: "đường ống phân phối chính" },
      { word: "Hydraulic Head", meanings: ["cột nước thủy lực", "đầu thủy lực", "áp lực nước"], primaryMeaning: "cột nước thủy lực / đầu thủy lực" },
      { word: "Centrifugal Pumps", meanings: ["bơm ly tâm", "máy bơm ly tâm"], primaryMeaning: "bơm ly tâm" },
      { word: "Elevated Storage Tank", meanings: ["bể chứa nước trên cao", "đài nước", "bể nước cao áp"], primaryMeaning: "bể chứa nước trên cao / đài nước" },
      { word: "Pressure-Reducing Valve - PRV", meanings: ["van giảm áp", "van giảm áp - prv", "van dieu ap"], primaryMeaning: "van giảm áp (Pressure-Reducing Valve)" },
      { word: "Isolation Valve", meanings: ["van cô lập", "van chặn", "van khóa", "van khoá"], primaryMeaning: "van cô lập / van chặn" },
      { word: "SCADA", meanings: ["scada", "hệ thống scada"], primaryMeaning: "hệ thống giám sát điều khiển và thu thập dữ liệu (SCADA)" },
      { word: "Friction Loss", meanings: ["tổn thất ma sát", "tổn hao ma sát", "tổn thất do ma sát"], primaryMeaning: "tổn thất ma sát" },
      { word: "Service Line", meanings: ["đường ống nhánh dịch vụ", "đường ống cấp nước vào hộ dân", "đường ống dịch vụ"], primaryMeaning: "đường ống nhánh dịch vụ / ống cấp vào nhà dân" },
      { word: "Control valves and meters", meanings: ["các van điều khiển và đồng hồ đo", "van điều khiển và đồng hồ"], primaryMeaning: "các van điều khiển và đồng hồ đo" },
      { word: "Backflow prevention devices", meanings: ["thiết bị ngăn dòng chảy ngược", "thiết bị chống chảy ngược"], primaryMeaning: "thiết bị ngăn dòng chảy ngược" },
      { word: "Monitoring and control systems (SCADA)", meanings: ["hệ thống giám sát và điều khiển (scada)", "hệ thống giám sát và điều khiển scada"], primaryMeaning: "hệ thống giám sát và điều khiển (SCADA)" },
      { word: "Water source", meanings: ["nguồn nước"], primaryMeaning: "nguồn nước" },
      { word: "Water treatment plant", meanings: ["nhà máy xử lý nước", "trạm xử lý nước", "nhà máy nước"], primaryMeaning: "nhà máy xử lý nước" },
      { word: "Storage facilities", meanings: ["các công trình lưu trữ nước", "bể chứa nước", "cơ sở lưu trữ nước"], primaryMeaning: "bể chứa nước / cơ sở lưu trữ nước" },
      { word: "Distribution network", meanings: ["mạng lưới phân phối", "mạng lưới đường ống phân phối"], primaryMeaning: "mạng lưới phân phối" },
      { word: "Service connections", meanings: ["các điểm đấu nối dịch vụ", "mối nối dịch vụ", "đấu nối dịch vụ"], primaryMeaning: "các điểm đấu nối dịch vụ" },
      { word: "Intake structures", meanings: ["công trình thu nước", "công trình lấy nước", "cửa thu nước"], primaryMeaning: "công trình thu nước / cửa lấy nước" },
      { word: "Pumping stations", meanings: ["các trạm bơm", "trạm bơm nước", "trạm bơm"], primaryMeaning: "trạm bơm" }
    ],
    sentences: [
      {
        english: "A typical urban water supply system consists of multiple interconnected components that work together to collect, store, transport, and distribute water.",
        vietnamese: "Một hệ thống cấp nước đô thị điển hình bao gồm nhiều thành phần liên kết chặt chẽ với nhau, hoạt động cùng nhau để thu thập, lưu trữ, vận chuyển và phân phối nước."
      },
      {
        english: "Consumption generally increases during mornings and evenings because households perform more activities during these periods, while demand may decrease during nighttime hours.",
        vietnamese: "Lượng tiêu thụ nước thường tăng vào buổi sáng và buổi tối vì các hộ gia đình thực hiện nhiều hoạt động hơn trong các khoảng thời gian này, trong khi nhu cầu có thể giảm vào ban đêm."
      },
      {
        english: "Managing urban water infrastructure creates additional challenges because water networks often consist of large numbers of pipes, valves, pumps, and service connections distributed across extensive areas.",
        vietnamese: "Quản lý cơ sở hạ tầng nước đô thị tạo ra các thách thức bổ sung vì các mạng lưới nước thường bao gồm một lượng lớn đường ống, van, máy bơm và các mối nối dịch vụ phân bổ trên các khu vực rộng lớn."
      },
      {
        english: "Aging infrastructure may increase maintenance requirements, while damaged pipelines may contribute to leakage and water losses.",
        vietnamese: "Cơ sở hạ tầng xuống cấp có thể làm tăng yêu cầu bảo trì, trong khi các đường ống bị hỏng có thể góp phần gây ra rò rỉ và thất thoát nước."
      }
    ]
  },
  {
    id: 5,
    title: "Urban Drainage Systems and Stormwater Management",
    vocabulary: [
      { word: "Storm runoff", meanings: ["nước mưa chảy tràn", "nước chảy tràn mùa mưa", "dòng chảy nước mưa"], primaryMeaning: "nước mưa chảy tràn / dòng chảy mùa mưa" },
      { word: "deterioration basins", meanings: ["bể điều hòa", "hồ điều hòa", "bể giữ nước tạm thời", "bể lắng chậm"], primaryMeaning: "bể điều hòa / bể giữ nước tạm thời" },
      { word: "grit chamber", meanings: ["bể lắng cát", "hố lắng cát"], primaryMeaning: "bể lắng cát" },
      { word: "sedimentation tank", meanings: ["bể lắng", "bể lắng bùn"], primaryMeaning: "bể lắng" },
      { word: "activated sludge", meanings: ["bùn hoạt tính"], primaryMeaning: "bùn hoạt tính" },
      { word: "trickling filter", meanings: ["bể lọc sinh học nhỏ giọt", "bộ lọc nhỏ giọt"], primaryMeaning: "bể lọc sinh học nhỏ giọt" },
      { word: "preliminary treatment", meanings: ["xử lý sơ bộ", "xử lý ban đầu"], primaryMeaning: "xử lý sơ bộ" },
      { word: "primary treatment", meanings: ["xử lý cấp một", "xử lý cơ học", "xử lý bậc một"], primaryMeaning: "xử lý cấp một / bậc một" },
      { word: "grit removal", meanings: ["lắng cát", "loại bỏ cát", "khử cát"], primaryMeaning: "lắng cát / loại bỏ cát" },
      { word: "secondary treatment", meanings: ["xử lý cấp hai", "xử lý sinh học", "xử lý bậc hai"], primaryMeaning: "xử lý cấp hai / bậc hai" },
      { word: "tertiary treatment", meanings: ["xử lý cấp ba", "xử lý nâng cao", "xử lý nâng chất lượng nước", "xử lý bậc ba"], primaryMeaning: "xử lý cấp ba / xử lý nâng cao" },
      { word: "sludge treatment", meanings: ["xử lý bùn thải", "xử lý bùn"], primaryMeaning: "xử lý bùn thải" },
      { word: "effluent discharge", meanings: ["xả thải nước thải sau xử lý", "xả nước thải sau xử lý", "xả nước thải đã qua xử lý"], primaryMeaning: "xả nước thải sau xử lý" },
      { word: "Topography", meanings: ["địa hình", "đặc điểm địa hình"], primaryMeaning: "địa hình" },
      { word: "Runoff", meanings: ["nước chảy tràn", "dòng chảy mặt", "dòng chảy tràn"], primaryMeaning: "nước chảy tràn / dòng chảy mặt" },
      { word: "Catchment Area", meanings: ["lưu vực", "diện tích thu nước", "diện tích hứng nước"], primaryMeaning: "lưu vực / diện tích thu nước" },
      { word: "Infiltration", meanings: ["sự thấm", "lượng thấm"], primaryMeaning: "sự thấm / infiltration" },
      { word: "Sewerage", meanings: ["hệ thống thoát nước", "hệ thống cống rãnh", "hệ thống cống thoát nước"], primaryMeaning: "hệ thống thoát nước / hệ thống cống rãnh" },
      { word: "Culvert", meanings: ["cống ngầm", "cống hộp", "cống vòm", "cống chui"], primaryMeaning: "cống hộp / cống ngầm" },
      { word: "Retention Pond", meanings: ["hồ giữ nước", "hồ lưu giữ nước", "hồ điều hòa lâu dài", "hồ điều hòa"], primaryMeaning: "hồ giữ nước / hồ điều hòa lâu dài" }
    ],
    sentences: [
      {
        english: "Wastewater originates from households, commercial buildings, industries, public facilities, and transportation infrastructure.",
        vietnamese: "Nước thải bắt nguồn từ các hộ gia đình, tòa nhà thương mại, công nghiệp, công trình công cộng và cơ sở hạ tầng giao thông."
      },
      {
        english: "Separate sewer systems transport stormwater and wastewater through independent networks, whereas combined systems collect both flows within shared infrastructure.",
        vietnamese: "Hệ thống cống riêng vận chuyển nước mưa và nước thải qua các mạng lưới độc lập, trong khi hệ thống cống chung thu gom cả hai dòng chảy trong cùng một hạ tầng dùng chung."
      },
      {
        english: "Gravity frequently plays an important role in wastewater transport because sewer systems are often designed with slopes that allow water to flow naturally toward treatment facilities.",
        vietnamese: "Trọng lực thường đóng vai trò quan trọng trong việc vận chuyển nước thải vì các hệ thống cống thường được thiết kế với độ dốc cho phép nước chảy tự nhiên về phía các cơ sở xử lý nước thải."
      },
      {
        english: "Uncontrolled storm-water and surface runoff can cause significant environmental damage, including soil erosion, flooding, and water pollution from non-point sources.",
        vietnamese: "Nước mưa chảy tràn và dòng chảy bề mặt không được kiểm soát có thể gây ra thiệt hại môi trường đáng kể, bao gồm xói mòn đất, ngập lụt và ô nhiễm nước từ các nguồn không tập trung."
      }
    ]
  },
  {
    id: 6,
    title: "Urban Environment and Pollution",
    vocabulary: [
      { word: "dispersed", meanings: ["bị phát tán", "bị phân tán", "phân tán"], primaryMeaning: "bị phát tán / phân tán" },
      { word: "diluted", meanings: ["bị pha loãng", "pha loãng"], primaryMeaning: "bị pha loãng" },
      { word: "surface runoff", meanings: ["nước chảy tràn bề mặt", "dòng chảy mặt", "nước mưa chảy tràn bề mặt"], primaryMeaning: "nước chảy tràn bề mặt" },
      { word: "global warming and depletion of stratospheric ozone", meanings: ["sự nóng lên toàn cầu và suy giảm tầng ozone ở tầng bình lưu", "nóng lên toàn cầu và suy giảm tầng ozone bình lưu"], primaryMeaning: "sự nóng lên toàn cầu và suy giảm tầng ozone ở tầng bình lưu" },
      { word: "source shutdown", meanings: ["đóng cửa nguồn phát thải", "dừng nguồn phát thải", "tắt nguồn phát thải"], primaryMeaning: "dừng / tắt nguồn phát thải" },
      { word: "plumes", meanings: ["vệt khói", "cột khói", "dải ô nhiễm", "luồng khí thải"], primaryMeaning: "vệt khói / cột ô nhiễm" },
      { word: "fuel substitutions", meanings: ["thay thế nhiên liệu", "sự thay thế nhiên liệu", "nhiên liệu thay thế"], primaryMeaning: "thay thế nhiên liệu" },
      { word: "radioactive waste", meanings: ["chất thải phóng xạ"], primaryMeaning: "chất thải phóng xạ" },
      { word: "absorb", meanings: ["hấp thụ", "hút"], primaryMeaning: "hấp thụ" },
      { word: "reflect", meanings: ["phản xạ", "phản chiếu"], primaryMeaning: "phản xạ" },
      { word: "reverberation", meanings: ["sự vang", "sự dội âm", "độ vang âm", "vọng âm"], primaryMeaning: "sự vang / sự dội âm" },
      { word: "impervious", meanings: ["không thấm nước", "không thấm", "bất thấm"], primaryMeaning: "không thấm nước" },
      { word: "airtight", meanings: ["kín khí", "kín gió", "kín"], primaryMeaning: "kín khí" },
      { word: "thermal pollution", meanings: ["ô nhiễm nhiệt"], primaryMeaning: "ô nhiễm nhiệt" },
      { word: "condenser", meanings: ["thiết bị ngưng tụ", "bộ ngưng tụ"], primaryMeaning: "thiết bị ngưng tụ" },
      { word: "metabolism", meanings: ["sự trao đổi chất", "quá trình trao đổi chất"], primaryMeaning: "sự trao đổi chất" },
      { word: "sewage", meanings: ["nước thải", "nước cống", "chất thải lỏng"], primaryMeaning: "nước thải / nước cống" },
      { word: "runoff", meanings: ["nước chảy tràn", "dòng chảy mặt"], primaryMeaning: "nước chảy tràn" },
      { word: "pesticides", meanings: ["thuốc trừ sâu", "thuốc bảo vệ thực vật"], primaryMeaning: "thuốc trừ sâu / thuốc bảo vệ thực vật" },
      { word: "point source", meanings: ["nguồn điểm", "nguồn phát thải tập trung", "nguồn xác định"], primaryMeaning: "nguồn điểm (Point Source)" },
      { word: "eutrophication", meanings: ["hiện tượng phú dưỡng", "sự phú dưỡng hóa", "phú dưỡng"], primaryMeaning: "hiện tượng phú dưỡng" },
      { word: "Light pollution", meanings: ["ô nhiễm ánh sáng"], primaryMeaning: "ô nhiễm ánh sáng" },
      { word: "Land pollution", meanings: ["ô nhiễm đất"], primaryMeaning: "ô nhiễm đất" },
      { word: "Noise pollution", meanings: ["ô nhiễm tiếng ồn"], primaryMeaning: "ô nhiễm tiếng ồn" },
      { word: "Air pollution", meanings: ["ô nhiễm không khí"], primaryMeaning: "ô nhiễm không khí" },
      { word: "Water pollution", meanings: ["ô nhiễm nước"], primaryMeaning: "ô nhiễm nước" }
    ],
    sentences: [
      {
        english: "Noise is perhaps one of the most undesirable by-products of a modern mechanized lifestyle, affecting human health and contributing to a general deterioration of environmental quality.",
        vietnamese: "Tiếng ồn có lẽ là một trong những sản phẩm phụ không mong muốn nhất của lối sống cơ giới hóa hiện đại, ảnh hưởng đến sức khỏe con người và góp phần làm suy giảm chất lượng môi trường nói chung."
      },
      {
        english: "Noise from highway traffic, construction activities, and other sources in the community is of special concern to civil and environmental engineers and technicians.",
        vietnamese: "Tiếng ồn từ giao thông đường bộ, hoạt động xây dựng và các nguồn khác trong cộng đồng là mối quan tâm đặc biệt đối với các kỹ sư và kỹ thuật viên xây dựng và môi trường."
      },
      {
        english: "A complete change of some industrial manufacturing processes can also reduce air pollution, such as using electric furnaces instead of open-hearth furnaces in the steel industry.",
        vietnamese: "Sự thay đổi hoàn toàn của một số quy trình sản xuất công nghiệp cũng có thể giảm thiểu ô nhiễm không khí, chẳng hạn như sử dụng lò điện thay thế cho lò phản ứng hở trong ngành thép."
      },
      {
        english: "Eutrophication is a process where water bodies receive excess nutrients, leading to excessive growth of algae and depletion of dissolved oxygen, which harms aquatic life.",
        vietnamese: "Phú dưỡng là một quá trình mà các vực nước nhận quá nhiều chất dinh dưỡng, dẫn đến sự phát triển quá mức của tảo và làm cạn kiệt lượng oxy hòa tan, gây hại cho các sinh vật thủy sinh."
      }
    ]
  },
  {
    id: 7,
    title: "IoT, Smart cities and Urban Technologies",
    vocabulary: [
      { word: "Internet of Things (IoT)", meanings: ["internet vạn vật", "mạng lưới vạn vật kết nối internet", "iot"], primaryMeaning: "Internet vạn vật (IoT)" },
      { word: "Sensor", meanings: ["cảm biến", "thiết bị cảm biến"], primaryMeaning: "cảm biến" },
      { word: "Smart Meter", meanings: ["đồng hồ đo thông minh", "đồng hồ thông minh", "công tơ thông minh"], primaryMeaning: "đồng hồ đo điện/nước thông minh" },
      { word: "Smart Grid", meanings: ["lưới điện thông minh"], primaryMeaning: "lưới điện thông minh" },
      { word: "Urban Monitoring", meanings: ["giám sát đô thị", "quan trắc đô thị"], primaryMeaning: "giám sát đô thị" },
      { word: "Smart Infrastructure", meanings: ["cơ sở hạ tầng thông minh", "hạ tầng thông minh"], primaryMeaning: "cơ sở hạ tầng thông minh" },
      { word: "Communication Network", meanings: ["mạng truyền thông", "mạng thông tin liên lạc", "mạng kết nối"], primaryMeaning: "mạng truyền thông / mạng thông tin liên lạc" },
      { word: "Real-time Data", meanings: ["dữ liệu thời gian thực", "dữ liệu tức thời"], primaryMeaning: "dữ liệu thời gian thực" },
      { word: "Smart Parking", meanings: ["bãi đỗ xe thông minh", "hệ thống đỗ xe thông minh", "đỗ xe thông minh"], primaryMeaning: "hệ thống đỗ xe thông minh" },
      { word: "Predictive Maintenance", meanings: ["bảo trì dự đoán", "bảo trì tiên đoán", "bảo dưỡng dự phòng"], primaryMeaning: "bảo trì dự đoán (Predictive Maintenance)" }
    ],
    sentences: [
      {
        english: "Sensors are fundamental components of Internet of Things (IoT) systems in smart cities, where they function as data acquisition devices that continuously collect information about physical and environmental conditions.",
        vietnamese: "Cảm biến là những thành phần cơ bản của hệ thống Internet vạn vật (IoT) trong các đô thị thông minh, nơi chúng đóng vai trò là thiết bị thu thập dữ liệu liên tục thu nhận thông tin về các điều kiện vật lý và môi trường."
      },
      {
        english: "Once data is collected, it is transmitted through communication networks to digital platforms, where it is processed, stored, and analyzed in real time.",
        vietnamese: "Sau khi dữ liệu được thu thập, nó sẽ được truyền qua các mạng truyền thông đến các nền tảng kỹ thuật số, nơi nó được xử lý, lưu trữ và phân tích theo thời gian thực."
      },
      {
        english: "This integration between physical sensing devices and digital systems enables cities to transform raw environmental data into meaningful information that can support decision-making processes.",
        vietnamese: "Sự tích hợp này giữa các thiết bị cảm biến vật lý và các hệ thống kỹ thuật số cho phép các thành phố chuyển đổi dữ liệu môi trường thô thành thông tin có ý nghĩa hỗ trợ các quy trình ra quyết định."
      },
      {
        english: "Predictive maintenance uses real-time data from IoT sensors to monitor infrastructure conditions and forecast potential failures before they occur, thereby reducing repair costs and downtime.",
        vietnamese: "Bảo trì dự đoán sử dụng dữ liệu thời gian thực từ các cảm biến IoT để giám sát tình trạng cơ sở hạ tầng và dự báo các hư hỏng tiềm ẩn trước khi chúng xảy ra, từ đó giảm chi phí sửa chữa và thời gian dừng hoạt động."
      }
    ]
  }
];
