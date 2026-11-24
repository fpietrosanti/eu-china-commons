Title: Revolutionizing Digital Finance: The Next Generation Database Technology behind AliPay's Success

URL Source: https://en.oceanbase.com/customer/alipay

Markdown Content:
Founded in 2004, **Alipay** has evolved from a third-party payment tool in China into a comprehensive digital lifestyle platform. Developed by Ant Group, it serves over **1.3 billion users** and partners with 200+ financial institutions. Today, Alipay supports tens of millions of small businesses, offering everything from payments and insurance to government services and financial management.

As Alipay expands, traditional relational databases couldn’t keep pace with this explosive growth, creating performance bottlenecks, rising costs, and operational complexity. By migrating to OceanBase, Alipay achieved seamless scalability, improved system resilience, and significantly reduced operational overhead—all while maintaining zero downtime during peak traffic periods.

## The Challenges

> This architecture had performance bottlenecks and rising storage costs as Alipay’s user base kept growing and the annually held Double 11 shopping festival caused ultra-high concurrency in the database system.
> 
> 
> Deng Rongwei,
> 
> 
> Senior Database Expert at Alipay

As Alipay’s user base grew exponentially, the limitations of traditional database architecture became increasingly apparent:

*   **Scaling Disrupted Operations:**During major shopping events like Double 11, traffic spikes required rapid capacity expansion. The existing infrastructure couldn’t adjust dynamically—scaling required manually diverting traffic to standby data centers, causing service interruptions at critical moments.
*   **Large-Scale Disaster Recovery with Strict Correctness:**As a financial platform, Alipay needed to survive data center or even city-level disasters without data loss. Traditional failover procedures took too long for real-time payment processing. When cache systems failed, connection storms could overwhelm the database, locking out even administrators trying to diagnose problems.
*   **Performance degradation under load:** At extreme concurrency levels, hot-row contention created cascading delays—hundreds of transactions queuing to update popular merchant accounts could wait seconds instead of milliseconds. SQL performance became unpredictable under load, and analytical queries interfered with transaction processing, threatening customer experience.
*   **Multi-Region Complexity:** Alipay’s unitization architecture divided the system into independent units to manage load, but this created operational complexity. Traffic routing required intricate coordination, disaster recovery involved elaborate manual procedures, and capacity planning became a multi-dimensional puzzle across zones and regions.
*   **Expensive and Risky Archiving:** Hardware heterogeneity created waste through poor disk utilization. When servers failed, rebuilding 100TB of data took nearly a week at 200 MB/s write speeds—creating extended vulnerability windows where additional failures could cause data loss.
*   **Complex Data Replication Pipelines:** Alipay’s workloads demanded both transactional performance and real-time analytical insight, plus diverse data access patterns. Running separate transaction (OLTP) and analytics (OLAP) systems required complex data replication pipelines.

## The Solution

After careful evaluation, Alipay chose OceanBase—a distributed relational database designed for high-concurrency, mission-critical applications at massive scale. OceanBase’s distributed architecture addresses Alipay’s challenges comprehensively:

### Elastic Scaling Enabled by a Multi-tenancy Architecture

Elastic multi-tenancy architecture enables seamless scaling without disruption. Multi-tenancy allows workloads to share infrastructure efficiently, with capacity scaled online by adjusting tenant resources—no downtime, no complex coordination. Dynamic replica management and instant leader/follower switching mean scaling operations no longer require business coordination or maintenance windows.

![Image 1](https://mdn.alipayobjects.com/huamei_22khvb/afts/img/A*RulqT5jr_DkAAAAAQ4AAAAgAeiGDAQ/original)

> “After the migration to OceanBase Database, we were able to add or remove replicas and perform a smooth leader/follower switchover with zero business interruption,”
> 
> 
> Deng Rongwei,
> 
> 
> Senior Database Expert at Alipay

### Geo-Redundancy Deployment for Financial Grade Resilience

Built on Paxos consensus protocol, data replicates synchronously across multiple geographically distributed data centers. Automatic recovery achieves RPO=0 (zero data loss) and RTO<30 seconds. Proactive leader switching reduces RTO to under 10 seconds. The architecture supports over 100,000 connections per node, absorbing connection storms that would paralyze traditional databases.

![Image 2](https://mdn.alipayobjects.com/huamei_22khvb/afts/img/A*fsCNTLYzvdgAAAAAQtAAAAgAeiGDAQ/original)

### Advanced Concurrency Management under Extreme Load

Early Lock Release (ELR) technology releases row locks immediately after writing to the log buffer, rather than waiting for disk flush—improving **TPS by****5-6 times** for hot-row scenarios. Plan caching and SQL Plan Management ensure stable query performance. Large queries process through separate worker pools, preventing analytical workloads from impacting transactions. Adaptive throttling at SQL, write, and server levels protects against overload conditions.

### Unified Storage for Massive Scale Archiving

Dynamic partition-level load balancing eliminates waste from hardware heterogeneity, maximizing disk utilization across the cluster. Multi-to-multi replica synchronization achieves 30-50 GB/s migration speeds, completing 100TB data migration in 2-3 hours instead of a week, dramatically reducing vulnerability windows during recovery.

### Transactions and Analytics in a Unified System

OceanBase stores data in both row format (optimized for transactions) and columnar format (optimized for analytics), automatically maintaining both representations. This eliminated complex replication pipelines, removed dependency on fragile third-party tools, and enabled real-time analytics without impacting transaction performance.

## The Migration: A Risk-Free Transition

Migrating a payment platform serving over a billion users from Oracle and MySQL databases required careful planning. The team developed a comprehensive migration strategy built on three key pillars:

OceanBase provides strong compatibility with both MySQL and Oracle syntax, protocols, and behavior. This allowed SQL queries, stored procedures, and database schemas to transfer with minimal modification.

OceanBase Migration Service (OMS) provided purpose-built tooling for schema conversion, data validation, performance benchmarking, and incremental synchronization. This kept source and target databases in sync during cutover, allowing verification before switching production traffic.

Phased migration approach started with non-critical systems to gain production experience, then progressively migrated increasingly important workloads. This eliminated big-bang risk and allowed the team to build confidence before tackling core payment processing databases.

## The Results

*   **Improved Scalability:**Alipay now seamlessly handles 61 million QPS and 544,000 TPS during Double 11 with complete confidence. Zero-downtime horizontal scaling executes in minutes through simple management interfaces, with the system automatically rebalancing across new capacity.
*   **Enhanced Performance & Availability:**Thirty-second automatic recovery from any failure ensures minimal business impact. The 5-6x transaction throughput improvement delivers consistently fast response times. Stable SQL performance and eliminated cache-failure cascades removed major operational pain points.
*   **Dramatically Reduced Costs:**Multi-tenancy reduced resource fragmentation, advanced compression lowered storage costs, and automation reduced DBA workload—delivering massive savings in both infrastructure and operations.

> “I was very impressed that, when the last conventional centralized databases of Alipay were taken off, the legacy data that would otherwise be squeezed onto hundreds of servers was nicely stored on about 10 servers in OceanBase Database,”
> 
> 
> Deng Rongwei,
> 
> 
> Senior Database Expert at Alipay

*   **Simplified Operations:**Automated capacity scaling and disaster recovery replaced manual procedures and complex coordination. A single unified system eliminated the need to maintain multiple database types and tools. Reduced complexity meant fewer opportunities for human error and better service levels with less stress.

## Conclusion

OceanBase has not only improved efficiency but also empowered Database Administrators to easily manage O&M systems, automate capacity scaling, and execute disaster recovery operations. OceanBase has made database migration a seamless and worry-free experience for Alipay.

As Alipay expands its super app ecosystem and serves an ever-growing global user base, OceanBase will remain a reliable and scalable database partner, ready to support Alipay's hypergrowth journey and beyond.
