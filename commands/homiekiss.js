const { MessageEmbed } = require('discord.js');

exports.run = async (client, message) => {
	let images = [
		'https://cdn.discordapp.com/attachments/586086236557410324/844247314847105034/unknown.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/844247391347671040/unknown.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/844256151088005180/artworks-ZhwDSeaanaGoh00P-LSd33A-t500x500.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/844256368222404648/artworks-000509242308-x3l7g6-t500x500.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186528069681152/8b4d165520daa7e32abe5e2bf4ce2fda.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186553667911690/72730705_screengrabbetter.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186575839264799/10-kinds-of-gay-kissers-750x.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186593173274664/Odjn1mE7.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186612195098645/CremeEgg.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186636988153926/812be65f08541a47a562849ed8bd3040.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186698648485898/Stella-Asia-Consonni-1024x576.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186752872579112/Kiss_-_Hiro_at_the_Maritime_Hotel.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186752708608000/governor-kiss-750_0.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186769209262100/censura-mensajes-denuncia-sociales-Captura_CYMIMA20200301_0005_16.png',
		'https://cdn.discordapp.com/attachments/586086236557410324/845186806731374662/theodore-instagram-prom-02x750.png',
	];
	let chosenImage = images[Math.floor(Math.random() * images.length)];

	message.channel.send(
		new MessageEmbed()
			.setAuthor(
				message.author.tag,
				message.author.displayAvatarURL({ dynamic: true })
			)
			.setImage(chosenImage)
	);
};
