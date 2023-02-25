import React from "react";

interface Props {
    x: number,
    y: number
}

export const HappySmiley: React.FC<Props> = (props) => {
    return (
        <svg
            x={props.x - 60}
            y={props.y-15}
            version="1.1"
            id="svg368"
            width="85"
            height="85"
            viewBox="0 0 85.333336 85.333336"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs
                id="defs697" />
            <g
                id="g699">
                <image
                    width="25"
                    height="25"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAP
s0lEQVR4nNWbeXhTVRrGyzMKSikttuwCla3QKi20tHS9SZqk2febrc3SdGFAZRnRGWAQBRUFRhHc
UEdUQBYdcHkEWZWWAi2ydi+go8MmSmGQItA235xzb24W0oYkbWE4z/M+8Gff93fuud937peQkC5e
Mr1tkFSfmyczmF6R6c2fI1XK9KafkS5LdXnNWBJd3mUxafxZTBqOCzT6fwnUhpf4KtIoIskBXf33
dclSGS3pCqN1pSrXWq/MtdoVuVagZLSA3GCmhAIAKRIyT0ubCygESiKNEYQaAwjUertApa/hK7Rv
cBRk8t325XNxSTJcnps/T2XKP6E22UCVl09J6WYeyzZZDzOfUsG8uTJ44TkJvDBfDHPnSGD6TAWY
CzVO844AQKDSUcpR6oCnIOu4CvJvaTJZ2N3261wSgyFKlZu/hDTbLmvMBYDNMwFYivJg8Ysy2PIJ
ASdKJsC1mrFgPzkaaRTSSKQRtE4MR3qEUlPVCGj4Lha+/DgZFs7nA2lSU+ax+EotDgGy5epGpBf4
JPnQ3fTeTZVnnoKMXySRcSwcgD7fCksXyaFiSzq0nIhFBscgxTjEmHcLgDLPBBDt0DCkoUhDoKV+
KFRuHwvLXiZAplVTAXDlKASZBrKl6kssifJx/LfcUec6U8FY0lJwkLQUAiVk3FRkgTUrBXClKh7s
p5DxU2NpOQMYfQv9kV70Pc3TAdhPPEyrYTBcPT4U1q2cCCqDgg5ApqbEkajKCCk58o6YV5kKjMj0
f7XWIsq8wWaDte+J4FrtOGQ4zmE+1s38mKDpOwNA5mkNQhoIVysHw3vLJgFfoQKOVAVsiQrQTrjC
Eshyu9J7N4214G1dfjEw5p99Vgenyycis486FNcJ9Ie1SZ8xT2sAUn/4sfQRmD6NSwcgVmLZM0WK
pSGd/UgUFxffr7EUbGDM6/KLYO27Ymg9iak/dov5rqVPm6cDsDf0g5a6fvDhikS0ExRAiGmxhPJ1
iYmJ93eKeZIku5Pmwp16ZB4HYJlsgyPbM5FJd/N3nj4TgL2+L1IUlH85GkQqKRAiOaUMoexrgiDu
66j/buiw+5QxX/xEPpwqS3MzHyR9jwCCp+8egL0+Eqq3DwMZKYIsoRwyBTLIyBGvD+nI44CfeWxe
7zB/5mCKw7y/9GM6if4gn/SZAOz1D0H9rsEg0wgdAUghLUe6JCjzalOBxWCbTJm3/tmGyKeD/Yf4
dujHdRL9oUHTZwJoresDh78aDEKliAogPUdiT+WJNQGZx+95ZPx3bN5QUAxHdxC0eY8AOkJ/eCfR
7+tBn1YfuF4ZATs+iUaPggQHAGk88eU0gWKEv/67oVP+e4b+xlViZDwhSPq+yt5A6A/0iz42TysC
Gg+Gw4pFj1IBpPNRCFzhnhB/zgN06E1jzD8334BedeP9oB/bSfSHdJg+No91syYczpSGw+TiDDoA
nhgm8cQWn+ZxY6O3TW7EAeQVFcF/KlJvoX/rez9Y+j7K3oDoR7VJ314XjtQb7YLecOiLfpAlENEB
cEW/EHJ5RLsBaC1F/8Dmsda/L3GZD5q+r8InEPoDAqLPBHC9MgzO7g2DZQvjIJUrojSJI3i2TfMy
my0M0b+EzRdOtUFT7QT/6fssfAKg77PwCYQ+HYC9Lgwu7O8FP+6OAL6Mj3aAEJI5gouxBNHLKwCN
tXA+Q/+zD9uj76vwCb7lDZ5+ZLv0sXmsK4d6oV0QCiteGksFkJJN6S9eAehsxQ3YvKW4EH6vSeok
+oG3vP6Uvf7St9f1ghtVdAANO8JRj5DjCCCn2vPkN5kyGPpvvKYOgj4dQFP1WNjwTxYsX5oDezZN
6rSmZ9eGOFi8MA1WvzUBrh7v7wd9VwD2ulA4vy8Uzpb2hDmzJuBHgFJSVvZ41+FnLnqXefUd28ny
Qb/9wqelIQaemqV2XnZibXw/q8NNz5q3k1w9P2p5p0zhQnNtlPfh1wZ9JoDGip5UANs+HkQHwM6B
ZCJnqWv75xdR27/ocZvjve+r8GmbftWuJMq8+22vuVDXYfqaXKlHALjdrdz2iN/0sX4/jAN4EM6U
9ASeNJsKIImVc5Q+/fW2Qci8HdNftoQMij5+7qt3JXrQxwFYisgO0WcCcLvwoAP4Jtpv+va6nnDt
GB3A2dIH4C/TJlABTGTz7YkEERWiMeebme2/7VN+UPRxAC0No2HWLKXHXf/Gf2Z2iD4++Nai596d
/pQp2egRiPSbPg7gRtWDzgBWvRqNzVNKYueoQkhz4VKm5fXs+AJveq7VxKBDkIDXl/ChZPPEAOm3
X/bu3jAGHYKpsPrNBGg63vc29MM86GM1V9Pmz5b2gLKNUbR5Fh8SCd48VPsXfkkFYCt2FD///y1v
W2Vve/TttQ9Ca40rgFM7ezoDSCJ4a0JIa1EVDmDKdOs91fL6Sx8HYK99wBnA2ZLukCMj6B2QlX0w
RGstOoOvu+bMNd5zLW/b9Ht50Kd3gMs8ljFvEt7+OIAfQhD9yziABc/p7rmW11/6LdXuAdwPRYVJ
VADjM7m/oh1QeBMHsPgl8p5seW9HHwdws6qHRwDTpiZQAUzIzL5OBYDv+l0B3Fstrzf9UA/6WH8c
c5lnApiQxaUD0FkLL+MAFszX3rMtry/69toeqBJ0BXCm5D4oLEikAqAeAY258AwOYPZswz3b8vqi
jwO4VNHdIwBDbjK9A/AhqLEUVOHvfJOfNN+zLW97hx82j3WhzGUeiyvOwuZhAsGtwPf/X9CfuQtQ
IRTvV9nbVd/5AqPffuHjTr+5ypP+yR09GPr4DFgdQk13OL7xnyxNuW3TwwSw6aMseHcZD5W/o9uh
H/x3Pn8Ln6Zj4fDGy+Pgs/dGtUv/6hHX4YcDKN0QQZtHik9n/z1EZbKYmAmPres5ftE/fWCcs+nZ
+EFW59D3Wfi0Tf/jFbHOy87TeyO9Dj97bXf4db/79v8TfPDqEMr8+EwcAEcZoszNHYjM2/F4y9JF
Cr/K3j9qY4A0GakA8HBTV33nu13Za80nKPP4qqvpeJgXfXr73+8RwLSp4xwBcFqpdhgvdV5+PQ7A
MtkMLSf8a3oWLRA62t5cOFcx9o7T/8/evk76c59JapP+f7/3pP/zd/cBi8+i6I/P4Bx23ggpjJZ3
mAmvI9tS/Wp69mxKcc72vbuMfcfpv7owgb7n5wph1/phXvRba7rDub2e9LesinJu/4R09ivOANR5
1jRmvO31xVK/Tv4btaPAWqShApDp9WgXjPGz7O14y3t2XxQQAgEVgELLgetVobehTwfw9PQ4mj69
A8Z53AyrjNY6PNtnsJrhSuVjfjU936xLdU52vvgcvwP0A2t55zyd4qT/5YfD2371lXrSr9/WA9Ky
2TT9DE6l95cho/nvzGTnuve5fpW9LQ3DoXiq0jnd+flHKV3e8m5YGUN958MBGPIIaKm59dXXHS6W
e9N/bcFwJ/2EdM70Nj+NKfPyG3EAeQV50FQd61fL27AnDj0COioAqVYLh7c+2mUtb/nnQ6kPndg8
gU7++p39vOg3HfE++U+g4ofg0YdffAb7tzY/jdG7wPQyM9j88ds8v5uer9cm03O9SDiEkk3xnd7y
lnwaDYRI6KT/xarhXic/bnvPlXrTf3neSDf67NltmqfeBiZTpNJo+Q0PNavyzPBjWYLfLe97r2c5
B5uFai188k4KNNcFUva2Tb+5JhxWLY+DTIHYaf6txY96lb0t1a6a351+xaYwSGZzmMLnbExamu9B
a5ne8mdmrH3235TUdbe/Le/alakeg82PPymC2l2jg6Zf9c3DYCtgOQcc0vli+Gj5WK+Wt7WmB/x2
wLPlxcLvfYslyfXqy2AbfJp3rG7I/AFmpn/NO5yAmp7t68eD0qCihpqZweaZM3hQ8q84uFY16LZN
z7XKSPh240iYOiXLOd6CxZflwJbVw72aHnzfd7Hcdd/nTn/p8yPd3vucXf6Yp5ZYZRyOzF/CAcgN
efD91qSAWt4LBx+BOX/lUuadk90yPPauhBnTufDW0mRYtzIBtq6Jg62rY9HjMg7efCURnnicBWyx
lJruckx4UeZnzUiFXw5EerW8+K6PIl/qTf/rD/pCEovDBNAYTxDRfgeAl4DM1aAA7Ljp0ZoNULf7
sYCbnuPbY2DBPBbaCY6pbsc3PvcvPZREcudwIzPflyGQwPQn06nDr7XWu+W9WfUAXNjnedvLBLB3
Qzhk8NiMeXt8BkcRkHlmibTGZUzXZ7Rq4cSeWGhtCLzl/WlvNCKeCH+dxQGhSu7xnY8ZbcUB8GRi
eGpGOqx9Ow5+Ku3f7oVH09EHUZnrMF/qed93aHMYcESEs+VFvf/CoMw7VjexNnct85sevUULB7+K
g+s1wTc9N2v7wfmKwVCzIxr2bx4F+zaPhNodQ+B8eX+4WdPH54VHc3VPaKxwfee7lf5e1Otni7I8
Lzw6OjmOJ8WFauNW5gdNmlwdfPdZPFw6Mgy95rq+6cEBtNSEwpVDPRH1np7m3eh/vao/ZPI5TvNo
62/ujGFpapEk+SehyrAal7yUSAMsfyUTzuwfBpcOD4EbNV3T9DRX90LGQ+FcGT3hQZv3pH96Tw9Y
/uIImMjm0nf99G3vR502Lu+2uuWoDa+hktfO/KJr5gwBHN0yCs4feBh+Rdv6ytFBaIt3rOlpru6N
nvEw+K0cj7jR8z20eW/65ZsiwGpNZr70YvN2xzPfdb8h4slIjUCtu8T8pE2k0cJbS1Lhp5JhcH7/
IKSB8Ev5ALh0aAD8fqw//FGJnvuaftBc2xdaamnzrXWR6P8PUc/89co+cPVoBFz+Phwu7O+NDPem
Zvuc5vd60z+5MxSWzI9BVSHPaT4xi3cZ/Ut2mXH3JdDpRuQo9WXuVZ9cp0Yl6iQ49e1QOLd/AFJ/
Wvv6IfV1KAopEm3phxzqgxSBFE7JZb5t+g3bw2DFotHooMt2feLGyuTuTkznDr0j5t1XtkSl5snJ
s8zv+XDRI9Ko4dnZWbBt7Rg4U+YegMO8M4A+HgHQ5t3p0wGcLgmFHWsGwrxnxgNLyGPGWyglsvjn
EjOz8fzvnf3ZnPsSG419uHL1QmT+onvVh6XQyWDOM5mw5s3H4MDmaPj3d/3boB/hQf/U7j5Q9tkA
VPOPhKemJwFfwqdm+5jxNjqAnAvI/NzbNjZ3cuGfs3Kkmmeypeoapupzn+5iCh+FTgS2Qg5MeyIL
np6ZhpQKT05NB6uNAKmaTzU9TNfnNtlJmUfGjyezBTPH8Xihd9uvz8UWKxLZIuUylkR5nC1RtrZV
9bmXve5ND2OeDkDQmsIRHElh8ZZMJHgJd9tXUIunVPYjxEoyUyh/nhDKN6B/D2cJZT9mCqSNqN6/
QYkvaUzji39A5g+l8UXrJnEE8xF1NUFIorr67/sffgNFL4wbsGsAAAAASUVORK5CYII=
"
                    id="image701" />
            </g>
        </svg>
    )
}
