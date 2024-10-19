# group-34-interledger

# Value Proposition

Our platform leverages Interledger's microtransaction capabilities to revolutionize cloud-based storage by offering a pay-as-you-use model. Unlike traditional storage services with rigid pricing plans, our solution charges users only for the exact amount of storage they consume, ensuring a cost-effective and user-centric experience.

By utilizing smart storage management features, such as recommending file compression (e.g., zipping collections before upload) and suggesting the removal of long-unused files, our platform encourages efficient and optimized storage usage. Users save both space and money by maintaining a lean and organized storage system, all while having the flexibility to expand only when necessary.

The microtransaction model enables seamless, low-cost payments, making storage affordable and scalable for both individuals and businesses. With a focus on transparency, users can monitor their storage usage and payments in real-time, giving them full control over their data and costs.

Our goal is to provide a simple, flexible, and efficient storage solution that adapts to users' needs, eliminating unnecessary costs and complexity, and empowering users to take full advantage of modern cloud storage.

## Application Dependencies

### Tigerbeetle
- Mount Data file volume
```
docker run --security-opt seccomp=unconfined \
     -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle \
    format --cluster=0 --replica=0 --replica-count=1 /data/0_0.tigerbeetle
```

- Start
```
docker run -it --security-opt seccomp=unconfined \
    -p 3000:3000 -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle \
    start --addresses=0.0.0.0:3000 /data/0_0.tigerbeetle
```
Docs: https://docs.tigerbeetle.com/operating/docker/