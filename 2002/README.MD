# Node version
- v20.12.2

# Commando json-server

```
    json-server --watch db.json --port 3000
```


# intro a web services

1. Definição 
   1. mecanismo que permite a troca de informações via protocolos
2. caracteristicas
   1. baseado em padroes abertos que independem da plataforma
   2. indepencia 
   3. facil integração
3. protocolos
   1. SOAP - xml
   2. rest - http JSONs
   3. graphQL - 'nunca usei'
4. server <-> cliente
5. principais diferenças de SOA e web services
6. segurança
   1. autenticação e autorização - token, ssh ...
   2. criptografia (keccak) e ssl 
   3. proteção contra ataques (LGPB)
7. padroes de segurança
   1. Oauth2.0 | openId connect
   2. jwt
   3. mTLS
8. praticas
   1. rate limit e throttling
   2. cors
   3. validação e sanitização
   4. CSP
9. desafios e oportunidades
   1.  escalabilidade e perfomance
   2.  segurança
   3.  manutenção e evolução 
   4.  interoperabilidade
10. futuro => novos protocolos de comunicação