/*! i18n v0.1 | (c) 2016, 2016 Andrés Arrieta MIT LICENSE*/
var arrLang = {
	'en' : {
		'engineer' : 'Engineer',
		's1-t1' : 'Project Manager, Developer and former CTO of a BlockChain startup.',
		's1-t2' : 'I have been developing &amp; managing teams for innovative projects for companies like Ericsson and Telefónica.',
		's1-t3' : 'From mobile network projects (LTE, USSD, MMSc) to apps and web like Spotify Premium for Movistar.',
		'home' : 'Home',
		'about' : 'About',
		'resume' : 'Resume',
		'skills' : 'Skills',
		'works' : 'Works',
		'blog' : 'Blog',
		'contact' : 'Contact',
		'aboutme' : 'About Me',
		
		'name' : 'Name:',
		'aap' : 'Andrés Arrieta',
		'born' : 'Born:',
		'21dec' : '21 Dec 1984',
		'nationality' : 'Nationality:',
		'frmex' : 'French & Mexican',
		'address' : 'Address:',
		'annecy' : 'Annecy, France',
		's2-t1' : 'What I Do:',
		's2-t2' : 'I love working on innovative products and services. I build services that are simple, easy to use, and beautiful.',
		's2-b1' : 'Project Management',
		's2-b2' : 'Development',
		's2-b3' : 'Business Strategy',
		's2-b4' : 'Continuous Improvement',
		's2-b5' : 'Leadership',
		's2-b6' : 'Change Management',
		's2-bu1' : 'Send me message',
		's2-bu2' : 'Download my CV',
		
	},
	'zh' : {
		'engineer' : '工程师',
		's1-t1' : '项目经理，开发人员和BlockChain启动的前CFO。',
		's1-t2' : '我一直在开发＆ 为爱立信和Telefónica等公司的创新项目管理团队。',
		's1-t3' : '从移动网络项目（LTE，USSD，SMSc）到应用程序和网络像Spotify Premium for Movistar。',
		'home' : '家',
		'about' : '关于我',
		'resume' : '简历',
		'skills' : '技能',
		'contact' : '接触',
		'aboutme' : '关于我',
		'name' : '名称:',
		'aap' : 'Andrés Arrieta',
		'born' : '出生:',
		'21dec' : '21 十二月 1984',
		'nationality' : '国籍:',
		'frmex' : '法语和墨西哥语',
		'address' : '地址:',
		'annecy' : 'Annecy, 法国',
		's2-t1' : '我做的事:',
		's2-t2' : '我喜欢创新的产品和服务。 我建立的服务，简单，易于使用，和美丽。',
		's2-b1' : '项目管理',
		's2-b2' : '发展',
		's2-b3' : '经营策略',
		's2-b4' : '连续的提高',
		's2-b5' : '领导',
		's2-b6' : '更换管理层',
		's2-bu1' : '给我发消息',
		's2-bu2' : '下载我的简历',
	}

};

$(function(){
	$('.translate').click(function(){
		var lang = $(this).attr('id');

		$('.lang').each(function(index, element){
			$(this).text(arrLang[lang][$(this).attr('key')]);
		});
	});
});

