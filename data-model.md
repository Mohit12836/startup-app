# Setubandh: Data Model (v0.1, PostgreSQL)

सभी टेबल में `id (uuid)`, `created_at`, `updated_at` मानें। जहाँ ज़रूरी हो `deleted_at` (soft delete)।

## MVP टेबल्स

### users
| कॉलम | टाइप | नोट |
|---|---|---|
| phone | text, unique, null | E.164 फ़ॉर्मेट |
| email | text, unique, null | |
| name | text | |
| avatar_url | text | |
| language | enum(`hi`,`en`) | डिफ़ॉल्ट `hi` |
| status | enum(`active`,`blocked`) | |
| consent_at | timestamptz | DPDP सहमति का समय |

*नियम:* phone या email में से कम-से-कम एक ज़रूरी।

### user_roles
`user_id`, `role` enum(`founder`,`investor`,`mentor`,`admin`)

### startups
| कॉलम | टाइप | नोट |
|---|---|---|
| owner_id | fk users | |
| name | text | |
| slug | text, unique | URL के लिए |
| tagline | text (≤140) | |
| description | text | |
| logo_url | text | |
| pitch_deck_url | text | |
| website | text | |
| sector_id | fk sectors | |
| stage | enum(`idea`,`mvp`,`early_revenue`,`growth`) | |
| team_size | int | |
| city_id | fk cities | |
| founded_year | int | |
| funding_needed | enum(`none`,`pre_seed`,`seed`,`series_a_plus`) | |
| status | enum(`draft`,`pending`,`approved`,`rejected`,`suspended`) | |
| rejection_reason | text | |
| is_verified | bool | वेरिफ़िकेशन से सेट |
| search_vector | tsvector | full-text search |

### startup_members
`startup_id`, `user_id`, `role_title`, `is_founder`

### verification_requests
| कॉलम | टाइप |
|---|---|
| startup_id | fk |
| doc_type | enum(`dpiit`,`cin`,`gst`,`udyam`) |
| doc_number | text (संवेदनशील: सीमित एक्सेस) |
| doc_file_url | text |
| status | enum(`pending`,`approved`,`rejected`) |
| reviewed_by | fk users (admin) |
| reviewed_at | timestamptz |
| note | text |

### connections
`from_user_id`, `to_user_id`, `startup_id` (null संभव), `message`, `status` enum(`pending`,`accepted`,`declined`,`blocked`)
*अद्वितीय:* (from_user_id, to_user_id)

### sectors / cities (रेफ़रेंस टेबल)
- `sectors`: `name_en`, `name_hi`
- `cities`: `name_en`, `name_hi`, `state`, `is_featured` (इंदौर = true)

### reports
`reporter_id`, `target_type` (`startup`/`user`), `target_id`, `reason`, `status`

### audit_logs
`actor_id`, `action`, `target_type`, `target_id`, `meta (jsonb)`: एडमिन की हर कार्रवाई दर्ज हो

### otp_attempts (या Redis में)
`identifier`, `code_hash`, `expires_at`, `attempts`

## Phase 2+ (बाद में जोड़ें)
`investor_profiles`, `messages`/`conversations`, `events`, `event_rsvps`, `jobs`, `schemes`, `notifications`, `subscriptions`

## इंडेक्स (शुरुआती सुझाव)
- `startups(status, city_id, sector_id, stage)`
- `startups` पर GIN इंडेक्स `search_vector`
- `connections(to_user_id, status)`

## डेटा नियम
- कोई भी स्टार्टअप तभी पब्लिक सर्च में जब `status = approved`
- `doc_number` और दस्तावेज़ फ़ाइलें कभी पब्लिक API में न लौटें
- यूज़र डिलीट अनुरोध: व्यक्तिगत फ़ील्ड मिटाएँ/गुमनाम करें, ऑडिट लॉग नियम के अनुसार रखें (वकील से पुष्टि)
