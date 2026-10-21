# Setubandh: API Outline (v0.1)

Base: `/api/v1` | फ़ॉर्मेट: JSON | Auth: `Authorization: Bearer <JWT>`

## Auth
| Method | Path | काम |
|---|---|---|
| POST | `/auth/otp/request` | फ़ोन/ईमेल पर OTP भेजें |
| POST | `/auth/otp/verify` | OTP जाँचें, टोकन लौटाएँ |
| POST | `/auth/refresh` | नया access token |
| POST | `/auth/logout` | टोकन रद्द |

## यूज़र
| Method | Path | काम |
|---|---|---|
| GET | `/me` | मेरी प्रोफ़ाइल |
| PATCH | `/me` | प्रोफ़ाइल/भाषा अपडेट |
| DELETE | `/me` | खाता डिलीट अनुरोध (DPDP) |

## स्टार्टअप
| Method | Path | काम |
|---|---|---|
| POST | `/startups` | नया स्टार्टअप (draft/pending) |
| GET | `/startups` | सर्च + फ़िल्टर (नीचे देखें) |
| GET | `/startups/:slug` | पब्लिक प्रोफ़ाइल |
| PATCH | `/startups/:id` | एडिट (सिर्फ़ मालिक) |
| POST | `/startups/:id/submit` | रिव्यू के लिए भेजें |
| GET | `/me/startups` | मेरे स्टार्टअप्स |

**सर्च पैरामीटर:** `q`, `city`, `sector`, `stage`, `funding`, `verified`, `page`, `limit`, `sort` (`newest`/`relevance`)

## वेरिफ़िकेशन
| Method | Path | काम |
|---|---|---|
| POST | `/startups/:id/verification` | दस्तावेज़ सहित अनुरोध |
| GET | `/startups/:id/verification` | स्थिति (सिर्फ़ मालिक) |

## फ़ाइल अपलोड
| Method | Path | काम |
|---|---|---|
| POST | `/uploads/sign` | signed upload URL (टाइप/आकार सीमा के साथ) |

## कनेक्शन
| Method | Path | काम |
|---|---|---|
| POST | `/connections` | रिक्वेस्ट भेजें |
| GET | `/connections` | मेरी लिस्ट (`status` फ़िल्टर) |
| PATCH | `/connections/:id` | स्वीकारें / मना करें |
| POST | `/blocks` | ब्लॉक करें |

## रिपोर्ट
| Method | Path | काम |
|---|---|---|
| POST | `/reports` | प्रोफ़ाइल रिपोर्ट करें |

## रेफ़रेंस
| Method | Path | काम |
|---|---|---|
| GET | `/sectors` | सेक्टर सूची |
| GET | `/cities` | शहर सूची (इंदौर featured) |

## Admin (`role = admin`)
| Method | Path | काम |
|---|---|---|
| GET | `/admin/startups?status=pending` | अप्रूवल कतार |
| POST | `/admin/startups/:id/approve` | अप्रूव |
| POST | `/admin/startups/:id/reject` | रिजेक्ट (कारण ज़रूरी) |
| POST | `/admin/startups/:id/suspend` | सस्पेंड |
| GET | `/admin/verifications?status=pending` | वेरिफ़िकेशन कतार |
| POST | `/admin/verifications/:id/decision` | अप्रूव/रिजेक्ट |
| GET | `/admin/users` | यूज़र सूची |
| POST | `/admin/users/:id/block` | ब्लॉक |
| GET | `/admin/reports` | रिपोर्ट सूची |
| GET | `/admin/stats` | आँकड़े |

## सामान्य नियम
- **त्रुटि फ़ॉर्मेट:** `{ "error": { "code": "...", "message": "...", "fields": {} } }`
- **Pagination:** `page` + `limit` (अधिकतम 50)
- **Rate limit:** OTP (जैसे 5 प्रयास/घंटा), सर्च और कनेक्शन भी सीमित
- **Validation:** हर इनपुट सर्वर पर जाँचें, क्लाइंट पर भरोसा नहीं
- **Permissions:** हर endpoint पर मालिक/एडमिन की जाँच
