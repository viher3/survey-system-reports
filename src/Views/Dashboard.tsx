import React from "react";
import {SmilesChartGroup} from "src/Components/SmilesChartGroup";

export const Dashboard: React.FC = () => {

    const data = {
        "11/02/2023": {
            "1": {
                "id": "138cb710-fa2c-48c2-968d-23ef1b91d059",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-11 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 0,
                "mode": 0
            },
            "2": {
                "id": "f478b010-3c75-4585-8885-77016b7577c7",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-11 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 0,
                "mode": 0
            },
            "3": {
                "id": "fbacfb57-a611-4a61-b82c-05740f28b737",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-11 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 0,
                "mode": 0
            },
            "4": {
                "id": "a33f9278-5227-48b0-ba29-4a73338104f9",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-11 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 0,
                "mode": 0
            },
            "5": {
                "id": "d6645d79-f547-48c4-aedb-11d620c3c291",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-11 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 0,
                "mode": 0
            },
            "6": {
                "id": "2c9a6c14-01e1-41e2-9400-d02aaf6225c6",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-11 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 0,
                "mode": 0
            },
            "7": {
                "id": "832d17d7-fbed-4d72-9cd5-a81ba445d90e",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-11 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 0,
                "mode": 0
            }
        },
        "13/02/2023": {
            "1": {
                "id": "bcf1ff99-1e31-4973-80d5-9597e99db392",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-13 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "2": {
                "id": "5367f336-e72a-486d-bdf9-972fd9157d58",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-13 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "3": {
                "id": "25abba25-6111-414a-973a-62a8698b2a7d",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-13 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "4": {
                "id": "2e1ac7f6-2d94-42f0-b809-061a74c4680a",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-13 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 3,
                "mode": 3
            },
            "5": {
                "id": "e6e4f418-8eb9-4160-b2a9-b18f8f92981a",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-13 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "6": {
                "id": "37d91809-f559-40f7-a559-eaf58b68021b",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-13 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 3,
                "mode": 3
            },
            "7": {
                "id": "aeda1af6-ea76-4941-9716-bad40cb79755",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-13 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            }
        },
        "14/02/2023": {
            "1": {
                "id": "cd2c9b09-6ac6-4445-b0ba-e46d0218d1da",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-14 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "2": {
                "id": "9993971a-309f-414a-92d1-e7dbca30379e",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-14 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "3": {
                "id": "414ee3a4-08bb-410b-9e19-37b458e5d510",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-14 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "4": {
                "id": "282c8563-b5a4-43ca-84df-4d3c759a7c56",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-14 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "5": {
                "id": "3ff861c0-5aa8-4879-aff6-1b052e6018c8",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-14 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "6": {
                "id": "1b6996a6-1a98-46bc-a8e8-8bca814ec68d",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-14 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "7": {
                "id": "7c393196-bd2a-4ac2-8fe3-999086ff5626",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-14 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            }
        },
        "15/02/2023": {
            "1": {
                "id": "135dbb03-864b-4cfe-b2ad-e04bda0ef6ae",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-15 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "2": {
                "id": "614cd096-007b-4374-a1e7-8976cf89b5d2",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-15 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "3": {
                "id": "6eccdd2a-3ad4-4c07-b0b4-a03a7587be02",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-15 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "4": {
                "id": "ab473dd1-fa93-4705-8ef5-0004a35c9c8f",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-15 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "5": {
                "id": "4febea32-ca2e-48ca-a816-a0260c2ddbbe",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-15 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "6": {
                "id": "b6917df1-ec20-437f-b8cd-60937d49b559",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-15 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "7": {
                "id": "28ede776-6ac9-4861-bcf1-0d63330ce9db",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-15 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            }
        },
        "16/02/2023": {
            "1": {
                "id": "c53e4503-de92-43d2-aa8c-db7dc4e6d56e",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-16 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "2": {
                "id": "a491bb23-01bb-4ad7-9e76-fceba6a80608",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-16 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "3": {
                "id": "56a5339d-6fe4-468f-90b3-9e548186dcbf",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-16 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "4": {
                "id": "1071ff4a-f517-448e-83b2-46a6deb0408c",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-16 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "5": {
                "id": "e73b0e1d-8640-4d72-81f0-528eef43880f",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-16 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "6": {
                "id": "5a771bc2-5d07-441d-a8d4-19c9467be2c4",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-16 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "7": {
                "id": "130afaad-765d-4589-b4e1-181ad9632ed1",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-16 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            }
        },
        "17/02/2023": {
            "1": {
                "id": "689b3680-7189-4ac1-b4b6-fd79ddaec8c8",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-17 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "2": {
                "id": "50007919-ae93-45da-9c0f-d90899438991",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-17 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 4.67,
                "mode": 5
            },
            "3": {
                "id": "78afaff2-47b7-4243-9776-cdd237375568",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-17 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "4": {
                "id": "1cf84194-d4e2-425d-a991-e3b0e225f3c0",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-17 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 4.89,
                "mode": 5
            },
            "5": {
                "id": "1c1ed97f-402c-4e1f-ba54-7b1b2c676d1e",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-17 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 4.89,
                "mode": 5
            },
            "6": {
                "id": "b83a0cb1-9acc-454b-921b-7dc5b5234623",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-17 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 4.78,
                "mode": 5
            },
            "7": {
                "id": "fa1829de-ed9b-4951-b991-e6c6c6870a26",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-17 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            }
        },
        "20/02/2023": {
            "1": {
                "id": "b014f689-0e6e-4a1f-8b6d-6d6a8ca3f129",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-20 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "2": {
                "id": "b40b31c6-181b-4dac-9c67-1b4b3472871c",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-20 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 4.33,
                "mode": 5
            },
            "3": {
                "id": "ce0ffc83-226b-400a-aa5a-ddc357feabac",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-20 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "4": {
                "id": "ae2e5520-3dc8-4651-a4e6-78515efa4448",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-20 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "5": {
                "id": "1fab075b-d038-40c3-a45a-3bcfc38f2d7c",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-20 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "6": {
                "id": "88e7866d-4437-46f5-9f18-74c559c75b43",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-20 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "7": {
                "id": "55febb60-bf0e-4316-8724-6697d9a2dd86",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-20 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            }
        },
        "21/02/2023": {
            "1": {
                "id": "48b18a94-f130-4cdc-a2c1-8a86b81db003",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-21 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "2": {
                "id": "7078d94f-2cd9-4fa8-a786-fc0f7256a43b",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-21 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "3": {
                "id": "a2f443f1-ce10-416a-8e8b-a0119584281b",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-21 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "4": {
                "id": "8697d0b3-1bcc-464e-9e96-87a36717c691",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-21 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "5": {
                "id": "f1a0fb48-319f-409b-ac94-1079229559f7",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-21 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "6": {
                "id": "83dd1e21-682c-4fec-ae51-d6e2d2e892f4",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-21 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "7": {
                "id": "08ca9064-918d-421e-b41c-023ed6a03c9a",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-21 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            }
        },
        "22/02/2023": {
            "1": {
                "id": "c2a0b0e8-35a8-4591-815b-5eba7896cef3",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-22 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "2": {
                "id": "21786336-21c7-4465-b4d9-3b103c309309",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-22 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 4.67,
                "mode": 5
            },
            "3": {
                "id": "026657f6-be89-4b5a-9a07-52e03dd0bc1f",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-22 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "4": {
                "id": "6945eb9b-8fc9-44d3-a5b9-163bf67c7898",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-22 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "5": {
                "id": "c80d9cad-e1b4-44b7-878c-1cb72d9bbd8b",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-22 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "6": {
                "id": "4a1affd8-bc27-4607-b6d7-442caa1b9cf9",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-22 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "7": {
                "id": "61887c49-fda0-44bd-9423-4c9eaf70a473",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-22 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            }
        },
        "23/02/2023": {
            "1": {
                "id": "6ac8ca72-7e96-46e0-81f4-9badf2800393",
                "question": "¿Qué opinión general le ha merecido el servicio recibido durante su tratamiento?",
                "questionId": "9d8bbc27-f8b0-451a-9bd0-de025688bb3d",
                "questionPosition": 1,
                "date": {
                    "date": "2023-02-23 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "2": {
                "id": "b81d1408-d44b-4516-b388-e1a525324827",
                "question": "¿Qué opinión le merece la puntualidad de la clínica?",
                "questionId": "6001627a-8a4a-48ab-9b1f-e9f04a141e48",
                "questionPosition": 2,
                "date": {
                    "date": "2023-02-23 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "3": {
                "id": "575d8f92-2860-4759-b8fc-7e1a45b6ee54",
                "question": "En su experiencia personal, ¿cree que somos mejores o peores que otras clínicas?",
                "questionId": "9bb78af0-61f4-4f33-a2e1-949a95cf52ae",
                "questionPosition": 3,
                "date": {
                    "date": "2023-02-23 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "4": {
                "id": "2f46fae3-e1eb-422d-8596-c4691ea9950b",
                "question": "¿Considera que el precio abonado por el servicio ha sido...?",
                "questionId": "a70d6d5a-b229-43d0-9f91-ceab680e38f9",
                "questionPosition": 4,
                "date": {
                    "date": "2023-02-23 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "5": {
                "id": "f5b1b43d-8c71-45c1-83cd-53869972fa13",
                "question": "¿Qué opinión le merece la amabilidad del personal?",
                "questionId": "1afe2d69-d20a-41c4-8e8a-52b7eb4cef66",
                "questionPosition": 5,
                "date": {
                    "date": "2023-02-23 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "6": {
                "id": "4ad41d75-c18a-46b4-bb9d-6377fe951e5f",
                "question": "¿Ha recibido la información que le hacía falta durante el tratamiento?",
                "questionId": "791b93c6-8344-4a92-b3b9-9fc21813bded",
                "questionPosition": 6,
                "date": {
                    "date": "2023-02-23 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            },
            "7": {
                "id": "7b556095-81ba-4560-bde1-7e9a13b62dc4",
                "question": "¿Recomendaría a un familiar o amigo utilizar nuestros servicios?",
                "questionId": "7bb83357-ca55-4d2a-8677-c1a849b74763",
                "questionPosition": 7,
                "date": {
                    "date": "2023-02-23 00:00:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "average": 5,
                "mode": 5
            }
        }
    }

    return (
        <>
            <SmilesChartGroup data={data} />
        </>
    )

}
