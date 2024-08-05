# nodejs-siege

Test Nodejs with siege

### Start server within docker

```bash
docker-compose up --build
```

### Install & Run siege script with changing concurrency (-c) param

```bash
siege -c 10 -r 10 -H 'Content-Type: application/json' -f ./siege-urls.txt
siege -c 25 -r 10 -H 'Content-Type: application/json' -f ./siege-urls.txt
siege -c 50 -r 10 -H 'Content-Type: application/json' -f ./siege-urls.txt
siege -c 100 -r 10  -H 'Content-Type: application/json' -f ./siege-urls.txt
```

The following table presents the performance metrics for different levels of concurrency, including resource availability, average response time, and throughput.

| Concurrency | Resource Availability (%) | Avg Response Time (secs) | Throughput (MB/sec) |
| ----------- | ------------------------- | ------------------------ | ------------------- |
| 10          | 100.00%                   | 0.02                     | 0.59                |
| 25          | 100.00%                   | 0.03                     | 1.18                |
| 50          | 100.00%                   | 0.05                     | 1.18                |
| 100         | 100.00%                   | 0.09                     | 1.38                |
