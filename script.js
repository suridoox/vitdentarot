// Danh sách lá bài tarot với thông tin chi tiết
const tarotCards = [
    {
        name: "fool",
        image: "images/fool.jpg",
        messages: [
            "The Fool. Nếu bạn đang cảm thấy bị mắc kẹt trong một tình huống, The Fool nhắc nhở bạn rằng sự thay đổi là cần thiết. Đừng sợ thất bại, vì bạn có thể học hỏi từ nó và tiến xa hơn. Hãy đặt niềm tin vào bản thân và những người xung quanh.",
            "The Fool cho thấy rằng bạn đang ở ngã rẽ quan trọng trong cuộc đời. Đừng lo lắng nếu bạn cảm thấy bối rối, vì đôi khi việc không biết rõ hướng đi sẽ dẫn bạn đến những cơ hội bất ngờ. Hãy cứ tiến về phía trước với lòng dũng cảm.",
            "Lá bài The Fool báo hiệu rằng bạn đang đứng trước một khởi đầu mới đầy hứa hẹn. Đừng để sự sợ hãi ngăn cản bước đi của bạn. Hãy giữ vững niềm tin vào bản thân và đón nhận những thử thách mới mà cuộc sống mang lại.",
            "The Fool nhắc bạn rằng cuộc sống là một hành trình không ngừng khám phá. Đôi khi bạn cần phải bước ra khỏi vùng an toàn và chấp nhận rủi ro để đạt được những điều bạn mong muốn. Dũng cảm đối diện với tương lai, dù có bất kỳ trở ngại nào.",
            "The Fool. Nếu bạn cảm thấy thiếu định hướng hoặc không chắc chắn về tương lai, The Fool khuyến khích bạn hãy tin vào hành trình của mình. Mặc dù con đường phía trước có thể không rõ ràng, nhưng mỗi bước đi đều mang lại bài học quý giá. Hãy để niềm tin dẫn lối cho bạn."
        ]
    },
    {
        name: "magician",
        image: "images/magician.jpg",
        messages: [
            "The Magician cho thấy bạn đang có đủ sức mạnh để biến mọi điều bạn muốn thành hiện thực. Hãy tin vào khả năng của chính mình và sử dụng mọi nguồn lực xung quanh bạn.",
            "The Magician. Lá bài này nhắc nhở bạn rằng bạn có thể tạo ra phép màu trong cuộc sống của mình nếu bạn biết tận dụng mọi khả năng và cơ hội. Đừng sợ thử sức với những điều mới.",
            "The Magician khuyến khích bạn hãy kiểm tra lại các công cụ và nguồn lực của mình. Bạn đang có tất cả những gì cần thiết để thành công, chỉ cần biết cách sử dụng chúng một cách hiệu quả.",
            "The Magician. Lá bài này báo hiệu rằng bạn sắp khám phá được khả năng tiềm ẩn bên trong mình. Hãy dũng cảm bước ra ngoài vùng an toàn và sử dụng trí tuệ cũng như sáng tạo để vượt qua thử thách.",
            "The Magician nhắc bạn rằng sức mạnh thực sự nằm trong tay bạn. Hãy kiểm soát tình huống và tạo ra những thay đổi mà bạn muốn. Bạn có thể làm chủ vận mệnh của mình."
        ]
    },
    {
        name: "high_priestess",
        image: "images/high_priestess.jpg",
        messages: [
            "The High Priestess nhắc bạn lắng nghe trực giác của mình. Những sự thật sâu sắc và trí tuệ nội tâm đang chờ đợi bạn khám phá.",
            "The High Priestess. Lá bài này khuyến khích bạn tìm kiếm sự cân bằng giữa lý trí và cảm xúc. Đôi khi, chỉ cần lặng im một lúc là bạn sẽ nhận ra những điều mà tâm hồn đang muốn nói.",
            "The High Priestess chỉ cho bạn thấy rằng có những sự thật vẫn chưa được hé lộ. Hãy kiên nhẫn và chờ đợi thời điểm thích hợp để bạn hiểu rõ hơn.",
            "The High Priestess. Lá bài này là một lời nhắc nhở rằng trí tuệ không phải lúc nào cũng đến từ kiến thức thông thường, mà còn từ sự kết nối sâu sắc với bản thân và vũ trụ.",
            "The High Priestess khuyên bạn hãy lắng nghe tiếng nói bên trong và đừng để những yếu tố bên ngoài làm bạn phân tâm. Những câu trả lời bạn tìm kiếm thực ra đã ở ngay trong tâm trí bạn."
        ]
    },
    {
        name: "empress",
        image: "images/empress.jpg",
        messages: [
            "The Empress chỉ cho bạn thấy sức mạnh của sự nuôi dưỡng. Hãy quan tâm đến bản thân và những người xung quanh, bởi vì sự chăm sóc và yêu thương sẽ tạo nên sự thay đổi tích cực.",
            "The Empress. Lá bài này nhắc nhở bạn rằng cuộc sống cần sự cân bằng giữa việc cho đi và nhận lại. Hãy chăm sóc bản thân, nhưng đừng quên chia sẻ sự yêu thương với người khác.",
            "The Empress báo hiệu rằng bạn đang trong một giai đoạn phát triển mạnh mẽ. Hãy để sự sáng tạo và tình yêu dẫn dắt bạn đến những cơ hội mới.",
            "The Empress. Lá bài này khuyến khích bạn sống hòa hợp với thiên nhiên và những điều xung quanh bạn. Tìm kiếm sự bình yên và cảm hứng trong những điều giản dị nhất.",
            "The Empress nhắc nhở bạn về tầm quan trọng của sự chăm sóc và nuôi dưỡng. Khi bạn chăm sóc bản thân và người khác, bạn sẽ thấy cuộc sống trở nên đầy ý nghĩa hơn."
        ]
    },
    {
        name: "emperor",
        image: "images/emperor.jpg",
        messages: [
            "The Emperor mang đến cho bạn thông điệp về sự kiểm soát và quyền lực. Hãy đứng vững và giữ vững nguyên tắc của mình, vì bạn có thể tạo ra sự thay đổi mạnh mẽ.",
            "The Emperor. Lá bài này nhắc bạn cần phải có kỷ luật và sự tổ chức để đạt được mục tiêu. Thành công không đến từ may mắn, mà từ việc làm việc chăm chỉ và bền bỉ.",
            "The Emperor chỉ cho bạn thấy rằng đôi khi bạn cần phải thể hiện sự mạnh mẽ và kiểm soát cuộc sống của mình. Đừng ngại đặt ra những ranh giới và yêu cầu sự tôn trọng từ người khác.",
            "The Emperor. Lá bài này nhắc nhở bạn về quyền lực của lý trí và sự sáng suốt. Hãy tin vào khả năng của bản thân và đưa ra những quyết định sáng suốt.",
            "The Emperor khuyến khích bạn đứng lên và lãnh đạo. Bạn có thể tạo ra sự thay đổi mạnh mẽ trong cuộc sống của mình nếu bạn học cách sử dụng quyền lực một cách khôn ngoan."
        ]
    },
    {
        name: "emperor",
        image: "images/emperor.jpg",
        messages: [
            "The Emperor mang đến cho bạn thông điệp về sự kiểm soát và quyền lực. Hãy đứng vững và giữ vững nguyên tắc của mình, vì bạn có thể tạo ra sự thay đổi mạnh mẽ.",
            "The Emperor. Lá bài này nhắc bạn cần phải có kỷ luật và sự tổ chức để đạt được mục tiêu. Thành công không đến từ may mắn, mà từ việc làm việc chăm chỉ và bền bỉ.",
            "The Emperor chỉ cho bạn thấy rằng đôi khi bạn cần phải thể hiện sự mạnh mẽ và kiểm soát cuộc sống của mình. Đừng ngại đặt ra những ranh giới và yêu cầu sự tôn trọng từ người khác.",
            "The Emperor. Lá bài này nhắc nhở bạn về quyền lực của lý trí và sự sáng suốt. Hãy tin vào khả năng của bản thân và đưa ra những quyết định sáng suốt.",
            "The Emperor khuyến khích bạn đứng lên và lãnh đạo. Bạn có thể tạo ra sự thay đổi mạnh mẽ trong cuộc sống của mình nếu bạn học cách sử dụng quyền lực một cách khôn ngoan."
        ]
    },
    {
        name: "hierophant",
        image: "images/hierophant.jpg",
        messages: [
            "The Hierophant khuyến khích bạn tìm kiếm sự giáo dục và học hỏi. Những lời dạy bảo của người khác có thể giúp bạn mở rộng tầm nhìn và làm phong phú thêm cuộc sống.",
            "The Hierophant. Lá bài này nhắc bạn về tầm quan trọng của các giá trị truyền thống và đức tin. Hãy tìm kiếm sự kết nối với các nguyên lý đã được truyền lại từ trước.",
            "The Hierophant chỉ cho bạn thấy rằng đôi khi cuộc sống yêu cầu bạn phải tuân theo những quy tắc và luật lệ để có thể tiến xa hơn. Đừng sợ bị ràng buộc, vì đó có thể là chìa khóa giúp bạn trưởng thành.",
            "The Hierophant. Lá bài này nhắc nhở bạn rằng trí tuệ của bạn đang phát triển qua việc học hỏi từ những người có kinh nghiệm. Hãy giữ thái độ mở và tiếp nhận kiến thức từ người khác.",
            "The Hierophant khuyến khích bạn tìm kiếm sự an yên trong những giá trị tinh thần. Khi bạn kết nối với những niềm tin sâu sắc, bạn sẽ tìm thấy sự bình an và hướng đi trong cuộc sống."
        ]
    },
    {
        name: "lovers",
        image: "images/lovers.jpg",
        messages: [
            "The Lovers nhắc bạn rằng tình yêu và sự kết nối là phần quan trọng trong cuộc sống. Đừng ngại mở lòng và thể hiện tình cảm với người thân yêu.",
            "The Lovers. Lá bài này cho thấy bạn đang đối mặt với một sự lựa chọn quan trọng. Đừng chỉ nhìn vào lợi ích trước mắt mà hãy cân nhắc hậu quả lâu dài của quyết định của mình.",
            "The Lovers khuyến khích bạn tìm kiếm sự hài hòa trong các mối quan hệ. Tình yêu không chỉ là sự lãng mạn, mà còn là sự chia sẻ, thấu hiểu và tôn trọng lẫn nhau.",
            "The Lovers. Lá bài này nhắc bạn về tầm quan trọng của sự trung thực trong các mối quan hệ. Hãy đối diện với người khác một cách chân thành và cởi mở.",
            "The Lovers nhắc nhở bạn rằng sự kết nối sâu sắc với một ai đó có thể thay đổi cuộc đời bạn. Hãy dũng cảm bước vào những mối quan hệ mới và khám phá những cơ hội tình yêu."
        ]
    },
    {
        name: "chariot",
        image: "images/chariot.jpg",
        messages: [
            "The Chariot mang đến cho bạn một thông điệp mạnh mẽ về sự chiến thắng và kiểm soát. Bạn đang trong giai đoạn khẳng định bản thân và sẵn sàng đạt được mục tiêu.",
            "The Chariot. Lá bài này khuyến khích bạn hãy giữ vững tinh thần và không để những khó khăn làm bạn phân tâm. Dù con đường phía trước có thể khó khăn, bạn vẫn có khả năng vượt qua mọi thử thách.",
            "The Chariot cho thấy rằng bạn đang cần phải điều khiển cảm xúc và năng lượng của mình để đi đến thành công. Hãy tập trung và không để sự phân tâm làm bạn chệch hướng.",
            "The Chariot. Lá bài này báo hiệu rằng bạn đang tiến đến một giai đoạn chiến thắng. Tuy nhiên, bạn cần phải duy trì sự quyết tâm và không để những khó khăn nhỏ cản trở bước tiến của mình.",
            "The Chariot nhắc bạn rằng khi bạn điều khiển được bản thân và hoàn cảnh xung quanh, bạn có thể đạt được mọi điều mình muốn. Đừng để thất bại tạm thời làm bạn chùn bước."
        ]
    },
    {
        name: "strength",
        image: "images/strength.jpg",
        messages: [
            "Strength cho thấy rằng bạn đang sở hữu một sức mạnh bên trong mà có thể bạn chưa nhận ra. Hãy tìm cách khai thác sức mạnh này để vượt qua thử thách trong cuộc sống.",
            "Strength. Lá bài này khuyến khích bạn hãy sử dụng sự kiên nhẫn và sự tự chủ để vượt qua các khó khăn. Đôi khi, sức mạnh thực sự không đến từ việc chiến thắng, mà là từ sự kiên trì và bền bỉ.",
            "Strength nhắc nhở bạn rằng sức mạnh thực sự không phải là sự áp đặt hay kiểm soát người khác, mà là khả năng kiềm chế bản thân và hành động với sự thấu hiểu.",
            "Strength. Lá bài này báo hiệu rằng bạn có đủ sức mạnh để đối mặt với những thử thách lớn. Hãy tin vào khả năng của mình và đừng ngại thể hiện sự mạnh mẽ khi cần thiết.",
            "Strength khuyến khích bạn sử dụng trái tim và trí tuệ để vượt qua mọi trở ngại. Sức mạnh lớn nhất nằm ở khả năng duy trì sự bình tĩnh trong mọi tình huống."
        ]
    },
    {
        name: "hermit",
        image: "images/hermit.jpg",
        messages: [
            "The Hermit cho thấy rằng bạn cần một thời gian để tìm kiếm sự an tĩnh và chiêm nghiệm. Đôi khi, sự tĩnh lặng giúp bạn tìm ra câu trả lời cho những vấn đề trong cuộc sống.",
            "The Hermit. Lá bài này khuyến khích bạn hãy dành thời gian cho chính mình để suy ngẫm và tái tạo lại năng lượng. Bạn sẽ tìm thấy hướng đi rõ ràng hơn khi lắng nghe tiếng nói bên trong.",
            "The Hermit nhắc nhở bạn rằng có những lúc bạn cần phải rút lui khỏi thế giới xung quanh để tìm kiếm sự thật bên trong bản thân.",
            "The Hermit. Lá bài này cho thấy rằng việc ở một mình không phải là sự cô đơn, mà là cơ hội để bạn kết nối sâu sắc hơn với bản thân và khám phá những chân lý nội tâm.",
            "The Hermit khuyến khích bạn đi vào bên trong bản thân và tìm kiếm sự sáng suốt. Hãy tìm ra câu trả lời cho những câu hỏi mà bạn chưa thể giải quyết từ lâu."
        ]
    },
    {
        name: "wheel_of_fortune",
        image: "images/wheel_of_fortune.jpg",
        messages: [
            "The Wheel of Fortune báo hiệu sự thay đổi trong cuộc sống của bạn. Dù là thay đổi tốt hay xấu, bạn cần phải học cách thích nghi và tận dụng cơ hội.",
            "The Wheel of Fortune. Lá bài này nhắc nhở bạn rằng cuộc sống luôn có những chu kỳ. Nếu bạn đang ở thời điểm khó khăn, đừng lo lắng, vì may mắn sẽ quay lại với bạn.",
            "The Wheel of Fortune cho thấy rằng bạn đang bước vào một giai đoạn may mắn. Hãy tận dụng cơ hội và đừng sợ thay đổi, vì chúng sẽ đưa bạn đến một hướng mới.",
            "The Wheel of Fortune. Lá bài này khuyến khích bạn tin tưởng vào những cơ hội bất ngờ. Cuộc sống thay đổi không ngừng, và bạn cần học cách chấp nhận mọi thứ đến với mình.",
            "The Wheel of Fortune cảnh báo bạn rằng vận may có thể thay đổi. Hãy chuẩn bị tâm lý và sẵn sàng đối mặt với mọi tình huống, dù tốt hay xấu."
        ]
    },
    {
        name: "justice",
        image: "images/justice.jpg",
        messages: [
            "The Justice nhắc nhở bạn rằng mọi hành động đều có hậu quả. Bạn cần phải đối diện với mọi quyết định của mình bằng sự công bằng và trách nhiệm.",
            "The Justice. Lá bài này báo hiệu rằng bạn đang phải đưa ra một quyết định quan trọng. Hãy suy nghĩ kỹ lưỡng và đưa ra quyết định công bằng, với sự xem xét đầy đủ tất cả các yếu tố.",
            "The Justice khuyến khích bạn tìm kiếm sự công bằng trong mọi tình huống. Đừng để cảm xúc cá nhân làm mờ đi quyết định của bạn.",
            "The Justice. Lá bài này cho thấy rằng sự thật cuối cùng sẽ được tiết lộ. Hãy kiên nhẫn và tin tưởng rằng mọi sự việc sẽ được giải quyết công bằng.",
            "The Justice nhắc nhở bạn rằng những gì bạn gieo, bạn sẽ gặt. Hãy luôn hành động với đạo đức và lòng trung thực."
        ]
    },
    {
        name: "hanged_man",
        image: "images/hanged_man.jpg",
        messages: [
            "The Hanged Man cho thấy rằng bạn cần phải nhìn nhận mọi việc từ một góc nhìn khác. Đôi khi, việc lùi lại một bước có thể giúp bạn thấy rõ hơn vấn đề.",
            "The Hanged Man. Lá bài này khuyến khích bạn hãy chấp nhận thời gian gián đoạn và không hành động vội vàng. Đôi khi, việc chờ đợi và suy ngẫm là cần thiết để tìm ra giải pháp đúng đắn.",
            "The Hanged Man nhắc bạn rằng có thể bạn đang cảm thấy bất lực, nhưng đôi khi sự chịu đựng và kiên nhẫn sẽ mang lại những kết quả bất ngờ.",
            "The Hanged Man. Lá bài này chỉ cho bạn thấy rằng việc tạm ngừng và lùi lại có thể giúp bạn nhìn nhận được sự thật mà trước đây bạn chưa thấy. Đừng ngại thử thay đổi cách tiếp cận.",
            "The Hanged Man khuyến khích bạn chấp nhận sự im lặng và thinh lặng, vì trong đó bạn sẽ tìm thấy sự sáng suốt."
        ]
    },
    {
        name: "death",
        image: "images/death.jpg",
        messages: [
            "The Death mang đến cho bạn thông điệp về sự kết thúc và tái sinh. Đây không phải là kết thúc của mọi thứ, mà là cơ hội để bạn thay đổi và bắt đầu lại.",
            "The Death. Lá bài này cho thấy rằng bạn đang trong một giai đoạn chuyển đổi. Mặc dù sự thay đổi có thể khó khăn, nhưng đó là một phần của sự phát triển và trưởng thành.",
            "The Death cảnh báo rằng bạn cần phải để lại quá khứ phía sau và chấp nhận những thay đổi đang đến. Đừng sợ sự kết thúc, vì đó chỉ là một bước đi để bắt đầu hành trình mới.",
            "The Death. Lá bài này khuyến khích bạn không bám víu vào những thứ đã qua. Hãy dũng cảm buông bỏ và cho phép bản thân bắt đầu lại với những cơ hội mới.",
            "The Death báo hiệu rằng bạn sẽ trải qua một sự thay đổi lớn trong cuộc sống. Hãy tin rằng sau sự kết thúc là một khởi đầu tươi sáng hơn."
        ]
    },
    {
        name: "temperance",
        image: "images/temperance.jpg",
        messages: [
            "Temperance khuyên bạn hãy tìm kiếm sự cân bằng trong cuộc sống. Đừng để những cảm xúc quá khích hoặc sự thiếu kiểm soát làm mất đi sự hòa hợp trong bạn.",
            "Temperance. Lá bài này nhắc nhở bạn rằng sự hòa hợp và bình an chỉ đến khi bạn biết điều chỉnh và điều khiển cảm xúc của mình.",
            "Temperance khuyến khích bạn hãy kiên nhẫn và học cách hòa nhập với môi trường xung quanh. Bạn có thể tìm thấy sự bình an nếu biết cách điều chỉnh hành động và cảm xúc của mình.",
            "Temperance. Lá bài này cho thấy rằng bạn đang cần sự hài hòa trong cuộc sống. Hãy tìm cách để tất cả mọi thứ hoạt động một cách đồng điệu, từ công việc đến các mối quan hệ.",
            "Temperance khuyên bạn học cách giữ vững tinh thần và kiên nhẫn. Mọi thứ sẽ trở nên dễ dàng hơn khi bạn biết điều chỉnh và duy trì sự cân bằng."
        ]
    },
    {
        name: "devil",
        image: "images/devil.jpg",
        messages: [
            "The Devil cảnh báo bạn về sự ràng buộc trong cuộc sống. Đôi khi bạn cảm thấy như mình không thể thoát ra khỏi những thói quen xấu hoặc sự kiểm soát của người khác.",
            "The Devil. Lá bài này nhắc bạn rằng đôi khi bạn phải đối diện với những cám dỗ và lựa chọn giữa sự tự do và sự lệ thuộc. Đừng để mình bị mắc kẹt trong những điều tiêu cực.",
            "The Devil khuyến khích bạn phải mạnh mẽ và tự giải thoát khỏi những sự ràng buộc. Bạn có thể thay đổi khi bạn nhận thức được sức mạnh của mình và lựa chọn đi theo con đường tích cực.",
            "The Devil. Lá bài này nhắc bạn rằng bạn có quyền kiểm soát cuộc sống của mình. Đừng để sự sợ hãi hoặc thói quen xấu kìm hãm bạn.",
            "The Devil cảnh báo rằng những cám dỗ có thể dẫn bạn vào con đường sai lầm. Hãy tỉnh táo và giữ vững niềm tin vào chính mình để thoát khỏi sự lệ thuộc."
        ]
    },
    {
        name: "tower",
        image: "images/tower.jpg",
        messages: [
            "The Tower báo hiệu một sự thay đổi mạnh mẽ và đột ngột. Đừng lo sợ, vì sự sụp đổ của cái cũ sẽ mở ra những cơ hội mới và sự thay đổi cần thiết.",
            "The Tower. Lá bài này nhắc bạn rằng đôi khi cuộc sống phải chịu đựng những cú sốc để có thể phát triển. Mặc dù sự thay đổi có thể khó khăn, nhưng nó là một phần của quá trình tiến bộ.",
            "The Tower cảnh báo rằng bạn có thể sẽ phải đối diện với sự mất mát hoặc sự sụp đổ. Tuy nhiên, đó cũng là cơ hội để bạn xây dựng lại từ đầu và tìm thấy sức mạnh mới.",
            "The Tower. Lá bài này khuyến khích bạn đón nhận sự thay đổi dù có thể bất ngờ và khó khăn. Điều quan trọng là bạn có thể học hỏi từ những thử thách này.",
            "The Tower mang đến cho bạn thông điệp rằng sự sụp đổ của một cấu trúc cũ sẽ mở ra cơ hội cho những điều mới mẻ. Hãy chuẩn bị tinh thần và đón nhận sự thay đổi."
        ]
    },
    {
        name: "star",
        image: "images/star.jpg",
        messages: [
            "The Star mang đến cho bạn sự hy vọng và ánh sáng. Dù bạn đang trong giai đoạn tối tăm, đừng quên rằng luôn có hy vọng và một con đường sáng phía trước.",
            "The Star. Lá bài này khuyến khích bạn tìm kiếm sự chữa lành và phục hồi. Hãy tin tưởng vào bản thân và sức mạnh của sự tái sinh.",
            "The Star nhắc bạn rằng khi bạn nhìn vào tương lai với một trái tim đầy hy vọng, bạn sẽ có thể tạo ra những thay đổi tích cực trong cuộc sống.",
            "The Star. Lá bài này cho thấy rằng bạn đang bước vào một giai đoạn an lành và thanh thản. Đừng quên rằng tình yêu và sự hy vọng sẽ dẫn lối cho bạn.",
            "The Star mang lại thông điệp về sự bình yên và niềm tin vào tương lai. Hãy để ánh sáng này dẫn đường cho bạn, và tin rằng điều tốt đẹp sẽ đến."
        ]
    },
    {
        name: "moon",
        image: "images/moon.jpg",
        messages: [
            "The Moon chỉ ra rằng bạn có thể đang bị lừa dối hoặc bị mê hoặc bởi những điều không rõ ràng. Hãy cẩn thận và tìm cách tiếp cận mọi tình huống với sự tỉnh táo.",
            "The Moon. Lá bài này khuyên bạn nên thận trọng với những điều không rõ ràng và những ảo giác. Đôi khi, bạn cần phải dựa vào trực giác để nhận ra sự thật.",
            "The Moon mang đến thông điệp rằng bạn có thể đang bị che mờ bởi cảm xúc và suy nghĩ tiêu cực. Hãy tìm cách đối mặt với những nỗi sợ và sự bất an để tiến về phía trước.",
            "The Moon. Lá bài này nhắc nhở bạn rằng không phải mọi điều đều rõ ràng trong cuộc sống. Bạn cần phải tự tin và tin vào trực giác của mình để tìm ra con đường đúng đắn.",
            "The Moon cảnh báo rằng những ảo tưởng và sự mơ hồ có thể khiến bạn lạc lối. Hãy tìm kiếm sự rõ ràng và đừng để mình bị dẫn dắt bởi những cảm xúc nhất thời."
        ]
    },
    {
        name: "sun",
        image: "images/sun.jpg",
        messages: [
            "The Sun mang đến ánh sáng và niềm vui. Đây là thời điểm để bạn tận hưởng thành quả của mình và nhìn nhận cuộc sống với một tinh thần lạc quan.",
            "The Sun. Lá bài này chỉ ra rằng bạn đang trong giai đoạn hạnh phúc và thịnh vượng. Hãy đón nhận niềm vui và chia sẻ năng lượng tích cực với những người xung quanh.",
            "The Sun khuyến khích bạn sống thật với bản thân và tận hưởng những khoảnh khắc tốt đẹp. Đây là thời điểm để bạn thể hiện bản thân và rạng ngời trong mọi tình huống.",
            "The Sun. Lá bài này cho thấy rằng bạn đang bước vào một giai đoạn tràn đầy năng lượng và cơ hội. Hãy tận dụng tối đa cơ hội để tiến lên và sống một cuộc đời hạnh phúc.",
            "The Sun mang lại sự sáng sủa và niềm hy vọng. Đây là dấu hiệu của sự thành công và phát triển. Hãy tin tưởng vào bản thân và bước đi với sự tự tin."
        ]
    },
    {
        name: "judgement",
        image: "images/judgement.jpg",
        messages: [
            "The Judgement mang đến thông điệp về sự thức tỉnh và tái sinh. Đây là lúc để bạn đối mặt với quá khứ và làm sạch nó để tiến về tương lai.",
            "The Judgement. Lá bài này nhắc nhở bạn rằng mọi hành động đều có hậu quả. Hãy suy nghĩ kỹ lưỡng và đối diện với những quyết định của mình một cách rõ ràng và trung thực.",
            "The Judgement cho thấy bạn sẽ phải đối mặt với một sự đánh giá quan trọng. Hãy nhận thức về những sai lầm của mình và học hỏi từ chúng để trưởng thành hơn.",
            "The Judgement. Lá bài này cảnh báo rằng bạn sẽ cần phải đối diện với những quyết định lớn trong cuộc đời. Hãy sẵn sàng nhận thức lại mọi điều và tiếp tục con đường đúng đắn.",
            "The Judgement khuyến khích bạn tìm kiếm sự tha thứ và đổi mới. Hãy để quá khứ không còn là gánh nặng và mở lòng đón nhận cơ hội tái sinh."
        ]
    },
    {
        name: "world",
        image: "images/world.jpg",
        messages: [
            "The World cho thấy bạn đã hoàn thành một chu kỳ và đang tiến gần đến một kết thúc viên mãn. Đây là dấu hiệu của sự thành công và sự hoàn thiện.",
            "The World. Lá bài này nhắc nhở bạn rằng bạn đã vượt qua rất nhiều thử thách và giờ là lúc để ăn mừng thành quả của mình. Bạn đang đứng trước một giai đoạn mới của cuộc đời.",
            "The World khuyến khích bạn nhận thức rõ về những thành tựu và sự tiến bộ mà bạn đã đạt được. Đây là lúc để bạn tự hào về hành trình của mình và chuẩn bị cho những thách thức mới.",
            "The World. Lá bài này cho thấy rằng bạn đang ở đỉnh cao của sự thành công. Hãy cảm nhận niềm vui và hạnh phúc từ những thành quả mà bạn đã đạt được.",
            "The World mang đến sự kết thúc trọn vẹn và mở ra những cơ hội mới. Bạn đã hoàn thành một chu kỳ, và giờ là lúc để mở rộng cánh cửa cho những cuộc phiêu lưu tiếp theo."
        ]
    }
];

// Hàm xáo trộn mảng
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi vị trí
    }
}

// Xáo trộn danh sách lá bài
shuffleArray(tarotCards);

// Biến theo dõi số lượng lá bài đã lật
let flippedCount = 0;

// Lấy container chứa lá bài
const cardContainer = document.getElementById("card-container");

// Hiển thị lá bài úp
tarotCards.forEach((card) => {
    const cardElement = document.createElement("img");
    cardElement.src = "images/card_back1.jpg"; // Mặt sau của lá bài
    cardElement.alt = card.name;
    cardElement.classList.add("card");

    // Thêm sự kiện click để lật bài
    cardElement.addEventListener("click", () => flipCard(cardElement, card));

    cardContainer.appendChild(cardElement);
});

// Lấy container hiển thị phần giải nghĩa
const explanationContainer = document.getElementById("explanation-container");

// Hàm lật bài
function flipCard(cardElement, cardData) {
    // Nếu đã đạt giới hạn 3 lá bài hoặc lá bài đã lật, bỏ qua
    if (flippedCount >= 3 || cardElement.classList.contains("flipped")) {
        return;
    }

    // Thay đổi hình ảnh lá bài thành mặt trước
    cardElement.src = cardData.image;
    cardElement.classList.add("flipped");

    // Tăng số lượng lá bài đã lật
    flippedCount++;

    // Chọn thông điệp ngẫu nhiên từ danh sách messages
    const randomMessage = cardData.messages[Math.floor(Math.random() * cardData.messages.length)];

    // Tạo phần giải thích mới
    const explanation = document.createElement("div");
    explanation.classList.add("explanation-bubble");
    explanation.textContent = `${flippedCount}. ${randomMessage}`;
    
    // Thêm phần giải thích vào container
    explanationContainer.appendChild(explanation);
}
